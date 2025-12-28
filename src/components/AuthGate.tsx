"use client";

import React, { useState, useEffect, ReactNode } from 'react';
import { Lock, Loader2, AlertCircle, Clock } from 'lucide-react';

const SESSION_KEY = 'leadflow_authenticated';
const ATTEMPTS_KEY = 'leadflow_attempts';
const LOCKOUT_KEY = 'leadflow_lockout';
const MAX_ATTEMPTS = 5;
const LOCKOUT_DURATION = 60 * 60 * 1000; // 1 hour in milliseconds

export default function AuthGate({ children }: { children: ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
    const [passcode, setPasscode] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [attempts, setAttempts] = useState(0);
    const [lockoutEnd, setLockoutEnd] = useState<number | null>(null);
    const [timeRemaining, setTimeRemaining] = useState('');

    useEffect(() => {
        // Check if already authenticated in this session
        const auth = sessionStorage.getItem(SESSION_KEY);

        // Load attempts and lockout from localStorage
        const storedAttempts = parseInt(localStorage.getItem(ATTEMPTS_KEY) || '0');
        const storedLockout = parseInt(localStorage.getItem(LOCKOUT_KEY) || '0');

        setAttempts(storedAttempts);

        // Check if currently locked out
        if (storedLockout > Date.now()) {
            setLockoutEnd(storedLockout);
        } else if (storedLockout > 0) {
            // Lockout expired, reset attempts
            localStorage.removeItem(ATTEMPTS_KEY);
            localStorage.removeItem(LOCKOUT_KEY);
            setAttempts(0);
        }

        setIsAuthenticated(auth === 'true');
    }, []);

    // Update countdown timer
    useEffect(() => {
        if (!lockoutEnd) return;

        const updateTimer = () => {
            const remaining = lockoutEnd - Date.now();
            if (remaining <= 0) {
                setLockoutEnd(null);
                setAttempts(0);
                localStorage.removeItem(ATTEMPTS_KEY);
                localStorage.removeItem(LOCKOUT_KEY);
                setTimeRemaining('');
            } else {
                const minutes = Math.floor(remaining / 60000);
                const seconds = Math.floor((remaining % 60000) / 1000);
                setTimeRemaining(`${minutes}m ${seconds}s`);
            }
        };

        updateTimer();
        const interval = setInterval(updateTimer, 1000);
        return () => clearInterval(interval);
    }, [lockoutEnd]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Check if locked out
        if (lockoutEnd && lockoutEnd > Date.now()) {
            setError('Too many failed attempts. Please wait.');
            return;
        }

        setError('');
        setLoading(true);

        try {
            const response = await fetch('/api/auth', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ passcode }),
            });

            const data = await response.json();

            if (data.success) {
                // Success - reset attempts and authenticate
                localStorage.removeItem(ATTEMPTS_KEY);
                localStorage.removeItem(LOCKOUT_KEY);
                sessionStorage.setItem(SESSION_KEY, 'true');
                setIsAuthenticated(true);
            } else {
                // Failed attempt
                const newAttempts = attempts + 1;
                setAttempts(newAttempts);
                localStorage.setItem(ATTEMPTS_KEY, newAttempts.toString());

                if (newAttempts >= MAX_ATTEMPTS) {
                    // Lock out for 1 hour
                    const lockoutTime = Date.now() + LOCKOUT_DURATION;
                    localStorage.setItem(LOCKOUT_KEY, lockoutTime.toString());
                    setLockoutEnd(lockoutTime);
                    setError('Too many failed attempts. Locked for 1 hour.');
                } else {
                    setError(`Invalid passcode. ${MAX_ATTEMPTS - newAttempts} attempts remaining.`);
                }
                setPasscode('');
            }
        } catch (err) {
            setError('Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    // Still checking auth status
    if (isAuthenticated === null) {
        return (
            <div className="min-h-screen bg-slate-900 flex items-center justify-center">
                <Loader2 className="w-8 h-8 text-indigo-500 animate-spin" />
            </div>
        );
    }

    // Show lock screen
    if (!isAuthenticated) {
        const isLockedOut = lockoutEnd && lockoutEnd > Date.now();

        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 flex items-center justify-center p-4">
                <div className="w-full max-w-md">
                    <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl">
                        <div className="text-center mb-8">
                            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${isLockedOut ? 'bg-rose-600' : 'bg-indigo-600'}`}>
                                {isLockedOut ? <Clock className="w-8 h-8 text-white" /> : <Lock className="w-8 h-8 text-white" />}
                            </div>
                            <h1 className="text-2xl font-bold text-white mb-2">LeadFlow AI</h1>
                            {isLockedOut ? (
                                <p className="text-rose-400 text-sm">Access locked due to too many failed attempts</p>
                            ) : (
                                <p className="text-slate-400 text-sm">Enter passcode to access the dashboard</p>
                            )}
                        </div>

                        {isLockedOut ? (
                            <div className="text-center">
                                <div className="bg-rose-500/10 border border-rose-500/20 rounded-xl p-6 mb-4">
                                    <Clock className="w-12 h-12 text-rose-400 mx-auto mb-3" />
                                    <p className="text-rose-300 text-lg font-bold mb-1">Try again in</p>
                                    <p className="text-3xl font-mono font-bold text-white">{timeRemaining}</p>
                                </div>
                                <p className="text-slate-500 text-xs">
                                    Too many incorrect passcode attempts.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <input
                                        type="password"
                                        value={passcode}
                                        onChange={(e) => setPasscode(e.target.value)}
                                        placeholder="Enter passcode"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all text-center text-lg tracking-widest"
                                        autoFocus
                                        disabled={loading}
                                    />
                                </div>

                                {error && (
                                    <div className="flex items-center gap-2 text-rose-400 text-sm bg-rose-500/10 px-4 py-2 rounded-lg">
                                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                                        {error}
                                    </div>
                                )}

                                {attempts > 0 && attempts < MAX_ATTEMPTS && (
                                    <div className="flex justify-center gap-1">
                                        {Array.from({ length: MAX_ATTEMPTS }).map((_, i) => (
                                            <div
                                                key={i}
                                                className={`w-2 h-2 rounded-full ${i < attempts ? 'bg-rose-500' : 'bg-slate-600'}`}
                                            />
                                        ))}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={loading || !passcode}
                                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {loading ? (
                                        <>
                                            <Loader2 className="w-4 h-4 animate-spin" />
                                            Verifying...
                                        </>
                                    ) : (
                                        'Unlock'
                                    )}
                                </button>
                            </form>
                        )}
                    </div>

                    <p className="text-center text-slate-600 text-xs mt-6">
                        Protected Access • WebRivo
                    </p>
                </div>
            </div>
        );
    }

    // Authenticated - show app
    return <>{children}</>;
}

