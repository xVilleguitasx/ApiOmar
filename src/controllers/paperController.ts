import { Request, Response } from 'express';


import pool from '../database';

class PaperContreoller {

    public async list(req: Request, res: Response): Promise<void> {
        const games = await pool.query('SELECT * FROM paper');
        res.json(games);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM paper WHERE id = ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "El paper no existe" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO paper set ?', [req.body]);
        res.json({ message: 'Paper Guardado' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE paper set ? WHERE id_inscripcion = ?', [req.body, id]);
        res.json({ message: "El paper fue actualizado" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM tipopaper WHERE id = ?', [id]);
        res.json({ message: "Paper  eliminado" });
    }
}

const paperContreoller = new PaperContreoller;
export default paperContreoller;