import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`.underline.cyan);
    } catch (err) {
        console.log(`Error: ${err.message}`.bold.red);
        process.exit(1);
    }
}

export default connectDB
