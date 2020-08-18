import api from './api';

interface Response {
    token: string;
    user: {
        username: string;
        email: string;
    };
}

interface User {
    username: string;
    email: string;
    password: string;
}

export function signIn(email: string, password: string): Promise<any> {
    return api.post('/authenticate', {email, password});
}

export function register(user: User) {
    return api.post('/register', user);
}
