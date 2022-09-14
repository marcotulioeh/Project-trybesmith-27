import UserModel from '../models/user.model';
import User from '../interfaces/user';
import generationToken from './generationToken';

export default class UserService {
  private model: UserModel;

  constructor() {
    this.model = new UserModel();
  }

  public async create(user: User) { 
    await this.model.create(user);
    const token = generationToken(user.username);

    return token;
  }
}