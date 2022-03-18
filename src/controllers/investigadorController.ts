import { Request, Response } from "express";
import multer from "multer";

import pool from "../database";

class InvestigadorController {
  public async list(req: Request, res: Response): Promise<void> {
    const games = await pool.query("SELECT * FROM conferencista");
    res.json(games);
  }
  public async create(req: Request, res: Response): Promise<void> {
    const obj = JSON.parse(JSON.stringify(req.files));
    try {
      req.body.foto = obj.foto[0].path;
    } catch (error) {}
    try {
      req.body.hoja_de_vida = obj.pdf[0].path;
    } catch (error) {}
    const result = await pool.query("INSERT INTO conferencista set ?", [
      req.body,
    ]);
    res.json(result);
  }
  public async update(req: Request, res: Response): Promise<void> {
    console.log(req.body);
    const obj = JSON.parse(JSON.stringify(req.files));
    try {
      req.body.foto = obj.foto[0].path;
    } catch (error) {}
    try {
      req.body.hoja_de_vida = obj.pdf[0].path;
    } catch (error) {}
    const { id } = req.params;
    await pool.query("UPDATE conferencista set ? WHERE id = ?", [req.body, id]);
    res.json({ message: "conferencista  actualizado" });
  }
  public async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await pool.query("DELETE FROM conferencista WHERE id = ?", [id]);
    res.json({ message: "conferencista fue eliminado" });
  }
}
const investigadorController = new InvestigadorController();
export default investigadorController;
