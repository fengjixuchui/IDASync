import { ObjectID } from 'mongodb';

export class User {
    public _id: ObjectID;

    public username: string;
    public hardwareId: string;
}