import { Request, Response } from 'express';


import pool from '../database';

class ConfiReportesController {

    public async list(req: Request, res: Response): Promise<void> {
        const games = await pool.query('SELECT * FROM confi_reportes');
        res.json(games);
    }

   
    

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE confi_reportes set ? WHERE id = ?', [req.body, id]);
        res.json({ message: "Comite fue actualizado" });
    }

   
}

const confiReportesController = new ConfiReportesController;
export default confiReportesController;