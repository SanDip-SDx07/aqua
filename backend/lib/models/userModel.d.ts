import mongoose from 'mongoose';
interface IUser extends mongoose.Document {
    username: string;
    mobileNumber: string;
    address: string;
    status: 'active' | 'blocked';
}
declare const _default: mongoose.Model<IUser, {}, {}, {}, mongoose.Document<unknown, {}, IUser, {}, {}> & IUser & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export default _default;
