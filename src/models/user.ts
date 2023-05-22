import { v4 as uuidv4 } from 'uuid';

export class User {
    id: string;
    name: string;
    email: string;
    code: number;

    constructor(name: string, email: string, code: number) {
        this.id = uuidv4();
        this.name = name;
        this.email = email;
        this.code = code;
    }
}
