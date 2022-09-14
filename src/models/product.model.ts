import { Pool, ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import Product from '../interfaces/product';

class ProductModel {
  private connection: Pool;

  constructor() {
    this.connection = connection;
  }

  public async getAll(): Promise<Product[]> {
    const query = 'SELECT * FROM Trybesmith.Products';
    const [products] = await this.connection.execute(query);

    return products as Product[];
  }

  public async create(product: Product): Promise<Product> {
    const { name, amount } = product;
    const query = `INSERT INTO Trybesmith.Products (name, amount)
    VALUES (?, ?)`;

    const values = [name, amount];
    const [dataInserted] = await this.connection.execute<ResultSetHeader>(query, values);
    const { insertId: id } = dataInserted;

    return { id, ...product } as Product;
  }
}

export default ProductModel;