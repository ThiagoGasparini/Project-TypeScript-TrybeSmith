import { Request, Response } from 'express';
import ProductsService from '../services/ProductsService';

class ProductsController {
  constructor(private productsService = new ProductsService()) { }

  public create = async (req: Request, res: Response) => {
    const { name, amount } = req.body;
  
    const result = await this.productsService.create(name, amount);

    return res.status(201).json(result);
  };
}

export default ProductsController;