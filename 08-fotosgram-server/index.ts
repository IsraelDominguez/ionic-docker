import Server from './classes/server';
import userRoutes from "./routes/users";
import mongoose from 'mongoose';

const server = new Server();

// App Routes
server.app.use('/user', userRoutes);

// Connect to Mongo with index
mongoose.connect('mongodb://172.19.0.2:27017/fotosgram', {useNewUrlParser: true, useCreateIndex:true},
    (err) => {
        if (err) throw err;

        console.log("Connected to DataBase")
});


// Up Express Server
server.start( () => {
    console.log(`Server running on ${server.port} `);
});