import { Request, Response } from 'express';


import pool from '../database';

class PersonasController {

    public async list(req: Request, res: Response): Promise<void> {
        const games = await pool.query('SELECT * FROM persona');
        res.json(games);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM persona WHERE documento_identificacion = ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "La persona no existe" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO persona set ?', [req.body]);
        console.log(result);
        const id = await pool.query('Select id from persona where  documento_identificacion = ?', [req.body.documento_identificacion]);
        res.json(id);
    }

    public async update(req: Request, res: Response): Promise<void> {
        console.log(req.body);
        const { id } = req.params;
        await pool.query('UPDATE persona set ? WHERE id = ?', [req.body, id]);
        res.json({ message: "La persona fue actualizada" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM persona WHERE id = ?', [id]);
        res.json({ message: "La persona fue eliminada" });
    }
}

const personasController = new PersonasController;
export default personasController;