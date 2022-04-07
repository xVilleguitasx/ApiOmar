import { Request, Response } from 'express';


import pool from '../database';

class ConfiReportesController {

    public async list(req: Request, res: Response): Promise<void> {
        const games = await pool.query('SELECT * FROM confi_reportes');
        res.json(games);
    }

   
    

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const obj = JSON.parse(JSON.stringify(req.files));
        try {  (obj.logo[0]) ? req.body.logo = obj.logo[0].path : "";}catch (error) {}
        try {    (obj.banner[0]) ? req.body.banner = obj.banner[0].path : "";}catch (error) {}
        await pool.query('UPDATE confi_reportes set ? WHERE id = ?', [req.body, id]);
        res.json({ message: "Comite fue actualizado" });
    }

   
}

const confiReportesController = new ConfiReportesController;
export default confiReportesController;