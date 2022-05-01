const mongoose = require('mongoose');

const dbConnection = async() =>{

    try {
        const DATABASE_URL = process.env.MONGODB_CNN

        await mongoose.connect(DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log('Database connected OK');

    } catch (error) {
        console.error(error);
        throw new Error('Error starting the database')
    }
}

module.exports = dbConnection