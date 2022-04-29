import { Request, Response } from 'express';


import pool from '../database';

class PresentacionController {

    public async list(req: Request, res: Response): Promise<void> {
        const games = await pool.query('SELECT * FROM presentacion');
        res.json(games);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM presentacion WHERE id = ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "El registro no existe" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const obj = JSON.parse(JSON.stringify(req.files));
        try {
          req.body.imagen_boton_1 = obj.imagen_boton_1[0].path;
        } catch (error) {}
        try {
          req.body.imagen_boton_2 = obj.imagen_boton_2[0].path;
        } catch (error) {}
        const result = await pool.query('INSERT INTO presentacion set ?', [req.body]);
        res.json({ message: 'Registro Guardado' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const obj = JSON.parse(JSON.stringify(req.files));
        try {
            req.body.imagen_boton_1 = obj.imagen_boton_1[0].path;
          } catch (error) {}
          try {
            req.body.imagen_boton_2 = obj.imagen_boton_2[0].path;
          } catch (error) {}
          console.log(req.body)
        await pool.query('UPDATE presentacion set ? WHERE id = ?', [req.body, id]);
        res.json({ message: "Registro actualizado" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM presentacion WHERE id = ?', [id]);
        res.json({ message: "Registro  eliminado" });
    }
}

const presentacionController = new PresentacionController;
export default presentacionController;