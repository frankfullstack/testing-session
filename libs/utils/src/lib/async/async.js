import jwt from 'jsonwebtoken';

export function generateToken(userEmail, doneFn) {
    jwt.sign({ email: userEmail }, 'mySup3rS3cr3TV4lu3', doneFn);
}

export function generateTokenPromise(userEmail) {
    return new Promise((resolve, reject) => {
        jwt.sign({ email: userEmail }, 'mySup3rS3cr3TV4lu3', (error, token) => {
            if (error) {
                reject(error);
            } else {
                resolve(token);
            }
        });
    });
}