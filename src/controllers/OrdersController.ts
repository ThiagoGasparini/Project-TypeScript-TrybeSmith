import { Request, Response } from 'express';
import OrdersService from '../services/OrderService';

class OrdersController {
  constructor(private ordersService = new OrdersService()) { }

  public getAll = async (req: Request, res: Response) => {
    const result = await this.ordersService.getAll();

    return res.status(200).json(result);
  };
}

export default OrdersController;