import Server from './classes/server';
import userRoutes from "./routes/users";
import mongoose from 'mongoose';
import bodyParser from "body-parser";

const server = new Server();

// Body Parser middleware (accept X-urlencoded and pass to json
server.app.use(bodyParser.urlencoded({extended:true}));
server.app.use(bodyParser.json());

// App Routes
server.app.use('/user', userRoutes);

// Connect to Mongo with index
mongoose.connect('mongodb://ionic:ionic@172.19.0.2:27017/fotosgram', {useNewUrlParser: true, useCreateIndex:true},
    (err) => {
        if (err) throw err;

        console.log("Connected to DataBase")
});


// Up Express Server
server.start( () => {
    console.log(`Server running on ${server.port} `);
});