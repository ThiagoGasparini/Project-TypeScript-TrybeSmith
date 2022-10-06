import { Pool } from 'mysql2/promise';
import IOrder from '../interfaces/IOrder';

class OrdersModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IOrder[]> {
    const [result] = await this.connection.execute(
      `SELECT
          o.id, o.userId, JSON_ARRAYAGG(p.id) AS productsIds
        FROM
          Trybesmith.Orders as o
            INNER JOIN 
          Trybesmith.Products AS p
        ON o.id = p.orderId
        GROUP BY o.id
        ORDER BY o.userId
      `,
    );
    return result as IOrder[];
  }
}

export default OrdersModel;