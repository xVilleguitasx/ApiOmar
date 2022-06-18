import { Request, Response } from "express";
import * as bcryptjs from "bcryptjs";
import pool from "../database";
import * as jwt from "jsonwebtoken";

class CarrerasController {
  public async getOne(req: Request, res: Response): Promise<any> {
    const user = req.body.user;
    const pass = req.body.pass;
   
      const query = await pool.query(
        "SELECT * FROM usuario WHERE usuario = ?",
        [user]
      );
      if (!bcryptjs.compareSync(pass, query[0].pass)) {
        res.status(400).json({ message: "Usuario o contraseña incorrecto!" });
      }else{
        const token = jwt.sign(
          { userId: query[0].id, username: query[0].usuario },
          "CSEI",{expiresIn:'1h'}
          
        );
        res.json({
          token,
          userId: query[0].id
        });
      }
        
  }
} 

const carrerasController = new CarrerasController();
export default carrerasController;
