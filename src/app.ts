import express from 'express';
import ProductController from './controllers/ProductsController';
import UserController from './controllers/UsersController';

const productController = new ProductController();
const userController = new UserController();

const app = express();

app.use(express.json());

app.post('/products', productController.create);
app.get('/products', productController.getAll);

app.post('/users', userController.create);

export default app;
