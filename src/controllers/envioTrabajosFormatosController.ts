import { Request, Response } from 'express';


import pool from '../database';

class EnvioTrabajosFormatosController {

    public async list(req: Request, res: Response): Promise<void> {
        const games = await pool.query('SELECT * FROM enviotrabajos_formatos');
        res.json(games);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM enviotrabajos_formatos WHERE id = ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "El registro no existe" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        if (req.file?.path !== undefined) {
            req.body.boton = req.file?.path;
          }
          console.log(req.body)
        const result = await pool.query('INSERT INTO enviotrabajos_formatos set ?', [req.body]);
        res.json({ message: 'Registro Guardado' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        if (req.file?.path !== undefined) {
            req.body.boton = req.file?.path;
          }
          console.log(req.body)
        await pool.query('UPDATE enviotrabajos_formatos set ? WHERE id = ?', [req.body, id]);
        res.json({ message: "Registro actualizado" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM enviotrabajos_formatos WHERE id = ?', [id]);
        res.json({ message: "Registro  eliminado" });
    }
}

const envioTrabajosFormatosController = new EnvioTrabajosFormatosController;
export default envioTrabajosFormatosController;