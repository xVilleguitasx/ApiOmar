import { Request, Response } from 'express';


import pool from '../database';

class TipoIncripcionController {

    public async list(req: Request, res: Response): Promise<void> {
        const games = await pool.query('SELECT * FROM tipoinscripcion');
        res.json(games);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM tipoinscripcion WHERE id = ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "El tipo de inscripción no existe" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO tipoinscripcion set ?', [req.body]);
        res.json({ message: 'El tipo de inscripción Guardado' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE tipoinscripcion set ? WHERE id = ?', [req.body, id]);
        res.json({ message: "El tipo de inscripción fue actualizado" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM tipoinscripcion WHERE id = ?', [id]);
        res.json({ message: "El tipo de inscripción fue eliminado" });
    }
}

const tipoIncripcionController = new TipoIncripcionController;
export default tipoIncripcionController;