import { Request, Response } from 'express';


import pool from '../database';

class TipoComiteController {

    public async list(req: Request, res: Response): Promise<void> {
        const games = await pool.query('SELECT * FROM tipo_comite');
        res.json(games);
    }

    
}

const tipoComiteController = new TipoComiteController;
export default tipoComiteController;    