import { Customer } from './customer';

//
it('should update the email', () => {
    const initialEmail = 'test@email.com';
    const newTestEmail = 'test2@email.com';

    const user = new Customer(initialEmail);
    user.updateEmail(newTestEmail);

    expect(user.email).toBe(newTestEmail);
});

it('should have an email property', () => {
    const initialEmail = 'test@email.com';

    const user = new Customer(initialEmail);

    expect(user).toHaveProperty('email');
});

it('should store the provided email value', () => {
    const initialEmail = 'test@email.com';

    const user = new Customer(initialEmail);

    expect(user.email).toBe(initialEmail);
});

it('should clear the email', () => {
    const initialEmail = 'test@email.com';

    const user = new Customer(initialEmail);
    user.clearEmail();

    expect(user.email).toBe('');
});

it('should still have an email property after clearing the email', () => {
    const initialEmail = 'test@email.com';

    const user = new Customer(initialEmail);
    user.clearEmail();

    expect(user).toHaveProperty('email');
});