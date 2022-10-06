import connection from '../models/connection';
import OrdersModel from '../models/OrderModel';
import IOrder from '../interfaces/IOrder';

class OrdersService {
  public model: OrdersModel;

  constructor() {
    this.model = new OrdersModel(connection);
  }

  public async getAll(): Promise<IOrder[]> {
    const result = await this.model.getAll();
    
    return result;
  }
}

export default OrdersService;