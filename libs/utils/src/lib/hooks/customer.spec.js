import { Customer } from './customer';

describe('Customer', () => {
    const initialEmail = 'test@email.com';
    let customer;

    beforeAll(() => {
        console.log('BeforeAll Hook')
    })

    beforeEach(() => {
        console.log('Before Hook')
        customer = new Customer(initialEmail)
    })

    afterEach(() => {
        console.log('AfterEach Hook')
    })

    afterAll(() => {
        console.log('AfterAll Hook')
    })

    it('should update the email', () => {
        const newTestEmail = 'test2@email.com';
        customer.updateEmail(newTestEmail);
        expect(customer.email).toBe(newTestEmail);
    });

    it('should have an email property', () => {
        expect(customer).toHaveProperty('email');
    });

    it('should store the provided email value', () => {
        expect(customer.email).toBe(initialEmail);
    });

    it('should clear the email', () => {
        customer.clearEmail();
        expect(customer.email).toBe('');
    });

    it('should still have an email property after clearing the email', () => {
        customer.clearEmail();
        expect(customer).toHaveProperty('email');
    });
})
