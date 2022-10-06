import express from 'express';
import ProductController from './controllers/ProductsController';

const productController = new ProductController();

const app = express();

app.use(express.json());

app.post('/products', productController.create);
app.get('/products', productController.getAll);

export default app;
