import { Request, Response } from 'express';


import pool from '../database';

class IdentificacionController {

    public async list(req: Request, res: Response): Promise<void> {
        const games = await pool.query('SELECT * FROM tipodocumento');
        res.json(games);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM tipodocumento WHERE id = ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "El documento no existe" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO tipodocumento set ?', [req.body]);
        res.json({ message: 'Documento Guardado' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE tipodocumento set ? WHERE id = ?', [req.body, id]);
        res.json({ message: "El documento fue actualizado" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM tipodocumento WHERE id = ?', [id]);
        res.json({ message: "El documento fue eliminado" });
    }
}

const identificacionController = new IdentificacionController;
export default identificacionController;