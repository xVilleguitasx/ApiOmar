import { Request, Response } from 'express';


import pool from '../database';

class CarrerasController {

    public async list(req: Request, res: Response): Promise<void> {
        const games = await pool.query('SELECT * FROM carreras');
        res.json(games);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM carreras WHERE id = ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "La carrera no existe" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO carreras set ?', [req.body]);
        res.json({ message: 'Carrera Guardada' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE carreras set ? WHERE id = ?', [req.body, id]);
        res.json({ message: "La carrera fue actualizada" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM carreras WHERE id = ?', [id]);
        res.json({ message: "La carrera fue eliminada" });
    }
}

const carrerasController = new CarrerasController;
export default carrerasController;