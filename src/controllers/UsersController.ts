import { Request, Response } from 'express';
import UsersService from '../services/UsersService';

class UsersController {
  constructor(private usersService = new UsersService()) { }

  public login = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    const token = await this.usersService.login(username, password);
    
    return res.status(200).json({ token });
  };

  public create = async (req: Request, res: Response) => {
    const { username, classe, level, password } = req.body;
  
    const token = await this.usersService.create(username, classe, level, password);
    
    return res.status(201).json({ token });
  };
}

export default UsersController;
