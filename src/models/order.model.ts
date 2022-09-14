import { Pool, RowDataPacket } from 'mysql2/promise';
import connection from './connection';
import Order from '../interfaces/order';

interface OrderSQL extends Order, RowDataPacket {}

class OrderModel {
  private connection: Pool;

  constructor() {
    this.connection = connection;
  }

  public async getAll(): Promise<OrderSQL[]> {
    const query = `SELECT o.id AS id, o.userId AS userId, JSON_ARRAYAGG(p.id) AS productsIds
      FROM Trybesmith.Orders AS o INNER JOIN Trybesmith.Products AS p ON o.id = p.orderId
      GROUP BY o.id ORDER BY userId ASC`;
    const [orders] = await this.connection.execute<OrderSQL[]>(query);

    return orders;
  }
}

export default OrderModel;