import { Request, Response } from 'express';
import multer from 'multer'

import pool from '../database';

class EdicionController {

    public async list(req: Request, res: Response): Promise<void> {
        const games = await pool.query('SELECT * FROM ediciones ORDER BY id DESC');
        res.json(games);
    }
    public async create(req: Request, res: Response): Promise<void> {
     /*  const obj = JSON.parse(JSON.stringify(req.files));
      console.log(obj);
      (obj.imagen[0]) ? req.body.imagen = obj.imagen[0].path : "";
      (obj.pdf[0]) ? req.body.hoja_de_vida = obj.pdf[0].path : "";
       const result = await pool.query("INSERT INTO ediciones set ?", [
          req.body,
        ]);
        res.json(result); */
      }
    public async update(req: Request, res: Response): Promise<void> {
        console.log(req.body)
        const obj = JSON.parse(JSON.stringify(req.files));
        try { req.body.logo = obj.logo[0].path}catch (error) {}
        const { id } = req.params;
        await pool.query('UPDATE ediciones set ? WHERE id = ?', [req.body, id]);
        res.json({ message: "La edición fue actualizada" });
    }
}
const edicionController = new EdicionController;
export default edicionController;