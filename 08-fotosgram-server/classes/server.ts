import express from 'express';

// Como solo tiene una clase, se puede poner defulat para indicar que es la que se exporta
export default class Server {

    public app: express.Application;
    public port: number = 3000;

    constructor() {
        this.app = express();
    }

    start(callback: Function) {
        this.app.listen(this.port, callback);
    }
}