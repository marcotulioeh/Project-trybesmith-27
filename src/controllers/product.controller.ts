import { Request, Response } from 'express';
import Product from '../interfaces/product';
import ProductService from '../services/product.service';

class ProductController {
  private service: ProductService;

  constructor() {
    this.service = new ProductService();
  }

  public async getAll(_req: Request, res: Response) {  
    const products = await this.service.getAll();

    return res.status(200).json(products);
  }

  public async create(req: Request, res: Response) {
    const product = req.body as Product;  
    const newProduct = await this.service.create(product);

    return res.status(201).json(newProduct);
  }
}

export default ProductController;