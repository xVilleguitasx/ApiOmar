import { Request, Response } from 'express';
import * as bcryptjs from "bcryptjs";

import pool from '../database';

class UsuarioController {



    public async create(req: Request, res: Response): Promise<void> {
        console.log(req.body);
        const salt = bcryptjs.genSaltSync(10);
        req.body.pass = bcryptjs.hashSync(req.body.pass, salt);
        const result = await pool.query('INSERT INTO usuario set ?', [req.body]);
        res.json({ message: 'Usuario Guardado' });
    }


}

const usuarioController = new UsuarioController;
export default usuarioController;