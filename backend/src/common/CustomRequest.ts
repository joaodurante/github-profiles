import { Request } from 'express';

export default interface CustomRequest extends Request{
    io: any;
    connectedUsers: any;
}