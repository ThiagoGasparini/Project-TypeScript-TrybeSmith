import { Request, Response, NextFunction } from 'express';
import connection from '../models/connection';
import UsersModel from '../models/UsersModel';

class LoginValidation {
  public model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }

  public loginValidation = async (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body;

    if (!username) {
      return res.status(400).json({ message: '"username" is required' });
    }

    if (!password) {
      return res.status(400).json({ message: '"password" is required' });
    }

    const users = await this.model.login(username, password);

    if (!users) {
      return res.status(401).json({ message: 'Username or password invalid' });
    }

    next();
  };
}

export default LoginValidation;