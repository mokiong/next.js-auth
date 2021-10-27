import dotenv from 'dotenv';
dotenv.config();
import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
    const client = await MongoClient.connect(
        `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.an94b.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
    );

    return client;
}
