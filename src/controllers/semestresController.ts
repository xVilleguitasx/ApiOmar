import { Request, Response } from 'express';


import pool from '../database';

class SemestresController {

    public async list(req: Request, res: Response): Promise<void> {
        const games = await pool.query('SELECT * FROM semestres');
        res.json(games);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM semestres WHERE id = ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "El semestre no existe" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO semestres set ?', [req.body]);
        res.json({ message: 'Semestre Guardada' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE semestres set ? WHERE id = ?', [req.body, id]);
        res.json({ message: "El semestres fue actualizado" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM semestres WHERE id = ?', [id]);
        res.json({ message: "El semestre fue eliminado" });
    }
}

const semestresController = new SemestresController;
export default semestresController;