import express, { Express, Request, Response } from "express";
import stringsController from "./controllers/strings";
import productController from "./controllers/products";
import productsController from "./controllers/productlist";
import parcelmachines from "./controllers/parcelmachines";
import nordPoolPrice from "./controllers/nord-pool-price";
import cors from "cors";
import axios from "axios";

const app: Express = express();

app.use(cors({
    origin: ['http://localhost:3006']
}));
app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});
app.use("/", nordPoolPrice)
app.use("/", parcelmachines)
app.use("/", productController);
app.use('/', stringsController);
app.use('/', productsController);
app.listen(3000,() => {
    console.log(`[server]: Server is running at http://localhost:3000`);
});