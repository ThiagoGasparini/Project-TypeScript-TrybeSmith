import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import IUser from '../interfaces/IUser';

class UsersModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(
    username: string, 
    classe: string, 
    level: number, 
    password: string,
  ): Promise<IUser> {
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
    console.log(result);
    const [data] = result;
    const { insertId } = data;
    return { id: insertId, username, classe, level, password };
  }

  public async login(username: string, password: string): Promise<IUser> {
    const [result] = await this.connection.execute(`
    SELECT *
      FROM Trybesmith.Users WHERE username = ? AND password = ?
    `, [username, password]);
    
    return (result as RowDataPacket[])[0] as IUser;
  }
}

export default UsersModel;