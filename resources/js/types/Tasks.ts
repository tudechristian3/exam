import { User } from './index';

export interface Tasks {
    id: number;
    user_id: number;
    title: string;
    description: string;
    status: string;
    user: User;
}
