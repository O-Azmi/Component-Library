import {
    validateFullName,
    validateEmail,
    validateSubject,
    validateMessage,
} from './Form.lib';

describe('Form Validation', () => {
    test('Full Name validation', () => {
        expect(validateFullName('Oualid Azmi')).toBe(true);
        expect(validateFullName('')).toBe(false);
    });

    test('Email validation', () => {
        expect(validateEmail('walid@gmail.com')).toBe(true);
        expect(validateEmail('walid@')).toBe(false);
        expect(validateEmail('walid@gmail')).toBe(false);
    });

    test('Subject validation', () => {
        expect(validateSubject('Subject')).toBe(true);
        expect(validateSubject('')).toBe(false);
    });

    test('Message validation', () => {
        expect(validateMessage('This is a test message.')).toBe(true);
        expect(validateMessage('')).toBe(false);
    });
});
