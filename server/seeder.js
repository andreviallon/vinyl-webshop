import mongoose from 'mongoose'; 
import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/users.js';
import albums from './data/albums.js';
import User from './models/userModel.js';
import Album from './models/albumModel.js';
import Order from './models/orderModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
    try {
        await Order.deleteMany();
        await Album.deleteMany();
        await User.deleteMany();

        const createdUsers = await User.insertMany(users);
        const adminUser = createdUsers[0]._id;

        const sampleAlbums = albums.map(album => {
            return { ...album, user: adminUser };
        });

        await Album.insertMany(sampleAlbums);

        console.log('data imported'.green.inverse);
        process.exit();
    } catch (error) {
        console.error(`Error: ${error}`.red.bold);
        process.exit(1);
    }
};

const destroyData = async () => {
    try {
        await Order.deleteMany();
        await Album.deleteMany();
        await User.deleteMany();

        console.log('data destroyed'.red.inverse);
        process.exit();
    } catch (error) {
        console.error(`Error: ${error}`.red.bold);
        process.exit(1);
    }
};

if (process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}
