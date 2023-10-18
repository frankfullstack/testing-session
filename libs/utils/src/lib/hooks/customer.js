export class Customer {
    constructor(email) {
        this.email = email;
    }

    updateEmail(newEmail) {
        this.email = newEmail;
    }

    clearEmail() {
        this.email = '';
    }
}