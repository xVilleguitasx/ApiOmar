import { Request, Response } from 'express';


import pool from '../database';

class TipoPaperContreoller {

    public async list(req: Request, res: Response): Promise<void> {
        const games = await pool.query('SELECT * FROM tipopaper');
        res.json(games);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM tipopaper WHERE id = ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "El paper no existe" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO tipopaper set ?', [req.body]);
        res.json({ message: 'paper Guardado' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE tipopaper set ? WHERE id = ?', [req.body, id]);
        res.json({ message: "El paper fue actualizado" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM tipopaper WHERE id = ?', [id]);
        res.json({ message: "Paper  eliminado" });
    }
}

const tipoPaperContreoller = new TipoPaperContreoller;
export default tipoPaperContreoller;