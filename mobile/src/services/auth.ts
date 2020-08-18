import api from './api';

interface Response {
    token: string;
    user: {
        username: string;
        email: string;
    };
}

export function signIn(email: string, password: string): Promise<any> {
    return api.post('/authenticate', {email, password});
}
