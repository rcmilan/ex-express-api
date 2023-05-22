import { User } from '../models/user';

export class UserService {
    private users: Map<string, User> = new Map();

    saveUser(user: User): User {
        this.users.set(user.id, user);
        return user;
    }

    getUser(id: string): User | undefined {
        return this.users.get(id);
    }
}
