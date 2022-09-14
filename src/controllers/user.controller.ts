import { Request, Response } from 'express';
import UserService from '../services/user.service';
import User from '../interfaces/user';

class ProductController {
  private service: UserService;

  constructor() {
    this.service = new UserService();
  }

  public async create(req: Request, res: Response) {
    const user = req.body as User;  
    const token = await this.service.create(user);

    return res.status(201).json({ token });
  }
}

export default ProductController;