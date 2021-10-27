import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

export async function connectToDatabase() {
    const client = await MongoClient.connect(
        `mongodb+srv://testAdmin:ZNVbPfYH2qksUayF@cluster0.an94b.mongodb.net/next-blog?retryWrites=true&w=majority`
    );

    return client;
}
