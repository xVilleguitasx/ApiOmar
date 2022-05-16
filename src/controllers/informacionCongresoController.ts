import { Request, Response } from 'express';


import pool from '../database';

class InformacionCongresoController {

    public async list(req: Request, res: Response): Promise<void> {
        const games = await pool.query('SELECT * FROM informacion_congreso');
        res.json(games);
    }



    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const obj = JSON.parse(JSON.stringify(req.files));
        try {  (obj.logo[0]) ? req.body.logo = obj.logo[0].path : "";}catch (error) {}
        try {    (obj.favicon[0]) ? req.body.favicon = obj.favicon[0].path : "";}catch (error) {}
        await pool.query('UPDATE informacion_congreso set ? WHERE id = ?', [req.body, id]);
        res.json({ message: "Registro actualizado" });
    }

}

const informacionCongresoController = new InformacionCongresoController;
export default informacionCongresoController;