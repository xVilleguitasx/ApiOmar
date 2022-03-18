import { Request, Response } from "express";
import fs from "fs";

import pool from "../database";

class RegistroInformacionController {
  public async list(req: Request, res: Response): Promise<void> {
    const games = await pool.query("SELECT * FROM registro_informacion");
    res.json(games);
  }

  public async getOne(req: Request, res: Response): Promise<any> {
    const { id } = req.params;
    const games = await pool.query(
      "SELECT * FROM registro_informacion WHERE id = ?",
      [id]
    );
    if (games.length > 0) {
      return res.json(games[0]);
    }
    res.status(404).json({ text: "El registro no existe" });
  }

  public async create(req: Request, res: Response): Promise<void> {
    req.body.imagen = req.file?.path;
    const result = await pool.query("INSERT INTO registro_informacion set ?", [
      req.body,
    ]);
    res.json(result);
  }

  public async update(req: Request, res: Response): Promise<void> {
    console.log(req.body);
    const { id } = req.params;
    if (req.file?.path !== undefined) {
      req.body.imagen = req.file?.path;
    }
    await pool.query("UPDATE registro_informacion set ? WHERE id = ?", [
      req.body,
      id,
    ]);
    res.json({ message: "registro actualizado" });
  }

  public async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await pool.query("DELETE FROM registro_informacion WHERE id = ?", [id]);
    res.json({ message: "registro  eliminado" });
  }
}

const registroInformacionController = new RegistroInformacionController();
export default registroInformacionController;
