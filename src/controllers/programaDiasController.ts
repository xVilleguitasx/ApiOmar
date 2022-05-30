import { Request, Response } from 'express';


import pool from '../database';

class ProgramDiasController {

    public async list(req: Request, res: Response): Promise<void> {
        const games = await pool.query('SELECT * FROM programa_dias');
        res.json(games);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM programa_dias WHERE id = ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "El registro no existe" });
    }

    public async create(req: Request, res: Response): Promise<void> {
      
        const result = await pool.query('INSERT INTO programa_dias set ?', [req.body]);
        res.json({ message: 'Registro Guardado' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
      
        await pool.query('UPDATE programa_dias set ? WHERE id = ?', [req.body, id]);
        res.json({ message: "Registro actualizado" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM programa_dias WHERE id = ?', [id]);
        res.json({ message: "Registro  eliminado" });
    }
}

const programDiasController = new ProgramDiasController;
export default programDiasController;