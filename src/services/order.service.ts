import OrderModel from '../models/order.model';
import Order from '../interfaces/order';

class UserService {
  private model: OrderModel;

  constructor() {
    this.model = new OrderModel();
  }

  public async getAll(): Promise<Order[]> { 
    const orders = await this.model.getAll();

    return orders;
  }
}

export default UserService;