import { Book } from '../models/Book';
import { User } from '../models/User';

export class BookImpl implements Book {
    id: number;
    author: string;
    name: string;
    releaseDate: Date;
    pictureURL: string;
    createdAt: Date;
    updatedAt: Date;
    user: User;

}