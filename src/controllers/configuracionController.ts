import { Request, Response } from 'express';


import pool from '../database';

class ConfifuracionController {

    public async list(req: Request, res: Response): Promise<void> {
        const games = await pool.query('SELECT * FROM configuraciones');
        res.json(games);
    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
      
        await pool.query('UPDATE configuraciones set ? WHERE id = ?', [req.body, id]);
        res.json({ message: "La configuración fue actualizada" });
    }
}
const confifuracionController = new ConfifuracionController;
export default confifuracionController;