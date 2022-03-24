import { Request, Response } from "express";

import pool from "../database";

class CarrerasController {
  public async getOne(req: Request, res: Response): Promise<any> {
    const user = req.body.user;
    const pass = req.body.pass;
   
      const games = await pool.query(
        "SELECT * FROM usuario WHERE nick = ? && pass = ?",
        [user, pass]
      );
        return res.json(games[0]);
  }
}

const carrerasController = new CarrerasController();
export default carrerasController;
