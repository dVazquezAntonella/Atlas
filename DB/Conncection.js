const mongoose = require('mongoose');

const URI ="mongodb+srv://AdminM:1234@cluster0.zp7yg.mongodb.net/test?authSource=admin&replicaSet=atlas-11goxl-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  console.log('Se ha realizado la conexion con exito');
};

module.exports = connectDB;
