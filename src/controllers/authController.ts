import { Request, Response } from "express";
import * as bcryptjs from "bcryptjs";
import pool from "../database";
import * as jwt from "jsonwebtoken";
class CarrerasController {
  public async getOne(req: Request, res: Response): Promise<any> {
    const user = req.body.user;
    const pass = req.body.pass;
      const query = await pool.query(
                `SELECT u.id,u.usuario,tu.nombre as rol,u.pass FROM usuario as u INNER JOIN tipo_usuario_admin as tu on(u.id_tipo_per=tu.id) WHERE u.usuario = ?`,
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
          userId: query[0].id,
          rol:query[0].rol
        });
      }
        
  }
} 

const carrerasController = new CarrerasController();
export default carrerasController;
