const mongoose = require('mongoose');

const dbConnection = async () => {
    try{
        await mongoose.connect(process.env.DB_CNN, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});
        console.log('DB is live');
    } catch (e){
        console.log(e);
        throw new Error('Init DB Error')
    }
};

module.exports = {dbConnection}