import { connect, } from 'mongoose';

const db = process.env.DB;

const connection = () => connect('mongodb+srv://jasneljuillet09:Juillet09@cluster0.ozox9.mongodb.net/multiservices?retryWrites=true&w=majority');

export default connection;