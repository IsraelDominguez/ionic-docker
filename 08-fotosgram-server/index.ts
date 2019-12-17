import Server from './classes/server';
import userRoutes from "./routes/users";

const server = new Server();

// App Routes
server.app.use('/user', userRoutes);

// Up Express Server
server.start( () => {
    console.log(`Server running on ${server.port} `);
});