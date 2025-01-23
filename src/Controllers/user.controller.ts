import { Request, Response } from 'express';
import { UserService } from '../services/user.service';

const userService = new UserService();
export class UserController {

     static async getUser(req: Request, res: Response):Promise<any>  {
        try {
            const email = req.query.email as string;
            const infouser = await userService.getUser(email);


            
            return res.status(200).json( infouser );
        } catch (error){
            return res.status(400).json(error );
        }
    }

    static async createUser(req: Request, res: Response): Promise<any>  {
        try {
            const email = req.body.email as string;

            const id = await userService.createUser({ email });

            return res.status(200).json({ id });    

        } catch (error) {
            return res.status(400).json({ error });
        }
    }
}


