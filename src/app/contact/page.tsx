import React from 'react';
import { Mail, Phone, MapPin, Send, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-slate-50/50 p-6 md:p-10">
            <div className="max-w-4xl mx-auto">
                {/* Header with Back Button */}
                <div className="relative text-center space-y-3 mb-12">
                    <Link href="/legal" className="absolute left-0 top-0 p-2 hover:bg-slate-200 rounded-lg transition-colors md:block hidden">
                        <ArrowLeft className="w-5 h-5 text-slate-500" />
                    </Link>
                    <div className="md:hidden flex justify-start mb-4">
                        <Link href="/legal" className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                            <ArrowLeft className="w-4 h-4" /> Back
                        </Link>
                    </div>

                    <h1 className="text-3xl font-bold text-slate-900">Contact Us</h1>
                    <p className="text-slate-500 max-w-xl mx-auto">
                        Have questions about our services or need support? We're here to help.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Info Card */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                            <h3 className="text-lg font-bold text-slate-800 mb-6">Get in Touch</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0">
                                        <Mail className="w-5 h-5 text-indigo-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-slate-500 mb-1">Email Us</p>
                                        <a href="mailto:support@webrivo.com" className="text-slate-900 font-bold hover:text-indigo-600 transition-colors">support@webrivo.com</a>
                                        <p className="text-xs text-slate-400 mt-1">We typically reply within 24 hours.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0">
                                        <Phone className="w-5 h-5 text-emerald-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-slate-500 mb-1">Call Us</p>
                                        <a href="tel:+919876543210" className="text-slate-900 font-bold hover:text-emerald-600 transition-colors">+91 98765 43210</a>
                                        <p className="text-xs text-slate-400 mt-1">Mon-Fri from 9am to 6pm IST.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center shrink-0">
                                        <MapPin className="w-5 h-5 text-purple-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-slate-500 mb-1">Office</p>
                                        <p className="text-slate-900 font-bold">Bangalore, Karnataka</p>
                                        <p className="text-xs text-slate-400 mt-1">India</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                        <h3 className="text-lg font-bold text-slate-800 mb-6">Send Message</h3>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-2">Full Name</label>
                                <input type="text" placeholder="John Doe" className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm outline-none focus:border-indigo-500 transition-colors" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-2">Email Address</label>
                                <input type="email" placeholder="john@example.com" className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm outline-none focus:border-indigo-500 transition-colors" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-2">Subject</label>
                                <select className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm outline-none focus:border-indigo-500 transition-colors">
                                    <option>General Inquiry</option>
                                    <option>Support</option>
                                    <option>Sales</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-2">Message</label>
                                <textarea rows={4} placeholder="How can we help you?" className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm outline-none focus:border-indigo-500 transition-colors"></textarea>
                            </div>
                            <button type="button" className="w-full bg-indigo-600 text-white font-bold py-3 rounded-xl hover:bg-indigo-700 transition-all flex items-center justify-center gap-2">
                                <Send className="w-4 h-4" /> Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
