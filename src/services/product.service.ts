import Product from '../interfaces/product';
import ProductModel from '../models/product.model';

class ProductService {
  private model: ProductModel;

  constructor() {
    this.model = new ProductModel();
  }

  public async getAll(): Promise<Product[]> {
    const products = await this.model.getAll();

    return products;
  }

  public async create(product: Product): Promise<Product> { 
    const newProduct = await this.model.create(product);

    return newProduct;
  }
}

export default ProductService;