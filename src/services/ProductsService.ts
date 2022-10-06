import connection from '../models/connection';
import IProduct from '../interfaces/IProduct';
import ProductsModel from '../models/ProductsModel';

class ProductsService {
  public model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  public async create(name: string, amount: string): Promise<IProduct> {
    const result = await this.model.create(name, amount);

    return result;
  }

  public async getAll(): Promise<IProduct[]> {
    const result = await this.model.getAll();
    
    return result;
  }
}

export default ProductsService;