import { Request, Response } from 'express';
import fs from 'fs';

import pool from '../database';

class VerificarController {

    public async update(req: Request, res: Response): Promise<void> {
    
        
      /*   await pool.query('UPDATE inscripcion  set Hora_Registro_Deposito = '+ Hora_Registro_Deposito +',fecha_Registro_de_validacion=' +fecha_Registro_de_validacion +',cod_pago='+cod_pago'+,foto_deposito=foto_deposito  WHERE id_per_pert = id'); */
        console.log('foto' +  req.file)
        const { id } = req.params;
        req.body.foto_deposito = req.file?.path;
        await pool.query('UPDATE inscripcion set ? WHERE id_per_pert = ?', [req.body, id]);
        res.json({ message: "Inscripción actualizada" });
    

    }

    
}

const verificarController = new VerificarController;
export default verificarController;