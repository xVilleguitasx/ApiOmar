import { Request, Response } from 'express';


import pool from '../database';

class LugarDelEventoController {

    public async list(req: Request, res: Response): Promise<void> {
        const games = await pool.query('SELECT * FROM lugar_del_evento');
        res.json(games);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM lugar_del_evento WHERE id = ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "El registro no existe" });
    }

    public async create(req: Request, res: Response): Promise<void> {
      
        if (req.file?.path !== undefined) {
            req.body.imagen = req.file?.path;
          }
        const result = await pool.query('INSERT INTO lugar_del_evento set ?', [req.body]);
        res.json({ message: 'Registro Guardado' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
       
        if (req.file?.path !== undefined) {
            req.body.imagen = req.file?.path;
          }
          console.log(req.body);
        await pool.query('UPDATE lugar_del_evento set ? WHERE id = ?', [req.body, id]);
        res.json({ message: "Registro actualizado" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM lugar_del_evento WHERE id = ?', [id]);
        res.json({ message: "Registro  eliminado" });
    }
}

const lugarDelEventoController = new LugarDelEventoController;
export default lugarDelEventoController;