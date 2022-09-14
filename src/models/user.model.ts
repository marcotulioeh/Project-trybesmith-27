import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../interfaces/user';
import connection from './connection';

export default class ProductModel {
  private connection: Pool;

  constructor() {
    this.connection = connection;
  }

  public async create(product: User): Promise<User> {
    const { username, classe, level, password } = product;
    const query = `INSERT INTO Trybesmith.Users (username, classe, level, password)
      VALUES (?, ?, ?, ?)`;
    const values = [username, classe, level, password];
    const [dataInserted] = await this.connection.execute<ResultSetHeader>(query, values);
    const { insertId: id } = dataInserted;

    return { id, ...product } as User;
  }
}