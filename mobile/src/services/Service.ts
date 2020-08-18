import api from './api';

interface User {
    id: number;
    username: string;
    email: string;
}

class UserService {
    me(): Promise<User> {
        return api.post('/me');
    }
}
