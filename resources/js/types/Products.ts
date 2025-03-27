import { User } from './index';

export interface Products {
    id: number;
    name: string;
    description: string;
    price: number;
    user: User;
}
