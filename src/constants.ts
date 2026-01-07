export const USER_LABELS: Record<string, string> = {
    'sahana': 'Sahana',
    'himesh': 'Himesh',
    'akash': 'Akash',
    'admin': 'Admin'
};

export const getUserLabel = (username?: string) => {
    if (!username) return 'Unassigned';
    return USER_LABELS[username.toLowerCase()] || username;
};
