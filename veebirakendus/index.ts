import express, { Express, Request, Response } from "express";
import stringsController from "./controllers/strings";
import productController from "./controllers/products";
import productsController from "./controllers/productlist";
import cors from "cors";

const app: Express = express();

app.use(cors());
app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});
app.use("/", productController);
app.use('/', stringsController);
app.use('/', productsController);
app.listen(3000,() => {
    console.log(`[server]: Server is running at http://localhost:3000`);
});