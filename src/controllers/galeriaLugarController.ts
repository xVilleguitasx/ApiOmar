import { Request, Response } from 'express';


import pool from '../database';

class GaleriaLugarController {

    public async list(req: Request, res: Response): Promise<void> {
        const games = await pool.query('SELECT * FROM galeria_lugar_del_evento');
        res.json(games);
    }
    public async create(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        if (req.file?.path !== undefined) {
            req.body.imagen = req.file?.path;
          }
          console.log(req.body);
          const result = await pool.query('INSERT INTO galeria_lugar_del_evento set ?', [req.body]);
        res.json({ message: "Registro Creado" });
    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        if (req.file?.path !== undefined) {
            req.body.imagen = req.file?.path;
          }
          console.log(req.body)
        await pool.query(`UPDATE galeria_lugar_del_evento set ? WHERE id = ?`, [req.body, id]);
        res.json({ message: "Registro actualizado" });
    }
    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM galeria_lugar_del_evento WHERE id = ?', [id]);
        res.json({ message: "Registro  eliminado" });
    }
  
}

const galeriaLugarController = new GaleriaLugarController;
export default galeriaLugarController;