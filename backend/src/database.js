const mongoose = require('mongoose');
 
const URI = process.env.MONGODB_URI 
? process.env.MONGODB_URI
// : 'MONGODB_URI=mongodb://localhost/databasetest';
: 'MONGODB_URI=mongodb+srv://felekiankina:h6ZPFKpQ4EQ7m9N!@cluster0.gpa2w.mongodb.net/?retryWrites=true&w=majority';

 
mongoose.connect(URI,{
    useNewUrlParser: true,
//  useCreateIndex: true  se elimina de Mongo 6 en adelante
})
 
const connection = mongoose.connection;
 
connection.once('open', ()=> {
    console.log('DB is connected');
});

