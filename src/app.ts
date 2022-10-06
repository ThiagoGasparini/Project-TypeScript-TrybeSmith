import express from 'express';
import ProductController from './controllers/ProductsController';
import UserController from './controllers/UsersController';
import OrderController from './controllers/OrdersController';

const productController = new ProductController();
const userController = new UserController();
const orderController = new OrderController();

const app = express();

app.use(express.json());

app.post('/products', productController.create);
app.get('/products', productController.getAll);

app.post('/users', userController.create);

app.get('/orders', orderController.getAll);

export default app;
