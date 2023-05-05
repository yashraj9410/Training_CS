// connecting to the mongodb atlas 
import mongoose from 'mongoose';

const connect_db = async() => {

    await mongoose.connect("mongodb+srv://yashraj7011:12345@feedbackmanagement.llintv8.mongodb.net/test")
    .then(res => console.log("databse connected success fully"))
    .catch(err => console.log(`Databse not connected : ${err}`))
}

export default connect_db;