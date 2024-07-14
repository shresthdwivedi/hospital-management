import mongoose from 'mongoose';

export const dbConneciton = () => {
    mongoose.connect(process.env.MONGO_URI,{
        dbName: 'hospital-management'
    }).then(() => {
        console.log('Connected to MongoDB')
    }).catch(err => {
        console.log(`Some error occured while connecting to MongoDB: ${err}`)
    })
}
