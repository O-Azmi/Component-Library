export const validateFullName = (fullName: string): boolean => {
    return fullName.trim().length > 0;
};

export const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const validateSubject = (subject: string): boolean => {
    return subject.trim().length > 0;
};

export const validateMessage = (message: string): boolean => {
    return message.trim().length > 0;
};
