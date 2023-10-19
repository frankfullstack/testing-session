// TODO: See the working example in stackblitz https://stackblitz.com/edit/jest-example-zwr9ie?file=async.spec.js

import { generateToken, generateTokenPromise } from './async';

it('should generate a token value - callback', (done) => {
    const testUserEmail = 'test@mail.com';

    generateToken(testUserEmail, (err, token) => {
        // expect(token).toBeDefined();

        try {
            expect(token).toBeDefined();
            // expect(token).toBe(2);
            done();
        } catch (err) {
            done(err);
        }
    });
});

it('should generate a token value - promise 1', () => {
    const testUserEmail = 'test@mail.com';

    expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();
});

it('should generate a token value - promise 2', async () => {
    const testUserEmail = 'test@mail.com';

    const token = await generateTokenPromise(testUserEmail);

    expect(token).toBeDefined();
});