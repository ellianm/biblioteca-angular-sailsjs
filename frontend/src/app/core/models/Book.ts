import { User } from './User';

export interface Book {
   id: number;
   author: string;
   name: string;
   releaseDate: Date;
   pictureURL: string;
   createdAt: Date;
   updatedAt: Date;
   user: User;
}