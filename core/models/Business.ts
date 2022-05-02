import { Schema, model } from 'mongoose';

interface IBusiness {
    username: string,
    password: string,
    avatar?: string,
};

const BusinessSchema = new Schema<IBusiness>({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        default: 'https://image.shutterstock.com/image-vector/man-icon-vector-sign-symbol-260nw-1673511862.jpg',
    }
});

const Business = model<IBusiness>('Business', BusinessSchema);
export default Business;