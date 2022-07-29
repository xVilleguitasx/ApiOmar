import { Request, Response } from "express";
import fs from "fs";

import pool from "../database";

class InscripcionController {
  public async list(req: Request, res: Response): Promise<void> {
    const games = await pool.query("SELECT * FROM inscripcion");
    res.json(games);
  }

  public async getOne(req: Request, res: Response): Promise<any> {
    const { id } = req.params;
    const games = await pool.query(
      "SELECT * FROM inscripcion WHERE id_per_pert = ?",
      [id]
    );
    if (games.length > 0) {
      return res.json(games[0]);
    } 
    res.status(404).json({ text: "Inscripción no existe" });
  }

 
  public async create(req: Request, res: Response): Promise<void> {
    const result = await pool.query("INSERT INTO inscripcion set ?", [req.body]);
    console.log(result);
    const id = await pool.query('Select id from inscripcion where  id_per_pert = ?', [req.body.id_per_pert]);
    res.json(id);
  }

  public async update(req: Request, res: Response): Promise<void> {
   console.log(req.body)
    const { id } = req.params;
    await pool.query("UPDATE inscripcion set ? WHERE id_per_pert = ?", [
      req.body,
      id,
    ]);
    res.json({ message: "Inscripción actualizada" });
  }

  public async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await pool.query("DELETE FROM inscripcion WHERE id = ?", [id]);
    res.json({ message: "Inscripción  eliminada" });
  }
}

const inscripcionController = new InscripcionController();
export default inscripcionController;
