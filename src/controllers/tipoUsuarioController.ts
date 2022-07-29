import { Request, Response } from 'express';


import pool from '../database';

class TipoUsuarioController {

    public async list(req: Request, res: Response): Promise<void> {
        const games = await pool.query('SELECT * FROM tipo_usuario_admin');
        res.json(games);
    }

  
}

const tipoUsuarioController = new TipoUsuarioController;
export default tipoUsuarioController;