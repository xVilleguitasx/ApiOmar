import { Request, Response } from 'express';


import pool from '../database';

class ParaleloController {

    public async list(req: Request, res: Response): Promise<void> {
        const games = await pool.query('SELECT * FROM paralelo');
        res.json(games);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM paralelo WHERE id = ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "El paralelo no existe" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        console.log(req.body)
        const result = await pool.query('INSERT INTO paralelo set ?', [req.body]);
        res.json({ message: 'Paralelo Guardado' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE paralelo set ? WHERE id = ?', [req.body, id]);
        res.json({ message: "El paralelo fue actualizado" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM paralelo WHERE id = ?', [id]);
        res.json({ message: "Paralelo  eliminado" });
    }
}

const paraleloController = new ParaleloController;
export default paraleloController;