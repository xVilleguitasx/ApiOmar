import { Request, Response } from "express";

import pool from "../database";

class AdminInscripController {
  public async list(req: Request, res: Response): Promise<void> {
    const games = await pool.query(
      `SELECT i.estado estado,i.id numero, p.documento_identificacion di,CONCAT(ape_paterno, ' ', 
      ape_materno) apellidos,CONCAT(nom_paterno, ' ', nom_materno) nombres, ti.nom_inscr tipo_Inscrito , 
      tp.tipo tipo_Pago, i.foto_deposito comprobante,i.num_deposito numero_Deposito,p.email correo, 
      p.celular celular, p.direccion direccion, i.factura factura,p.id_carrera_per,p.id_semestre_per,
      p.id_paralelo_per,i.id_per_pert,i.certificado_I, i.certificado_P FROM inscripcion i,persona p, tipopago tp, tipoinscripcion ti 
      WHERE i.id_per_pert = p.id AND i.id_tipopago = tp.id AND ti.id = p.id_tip_ins_pert ORDER BY i.id ASC`
    );
    res.json(games);
  }

  public async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await pool.query(`UPDATE inscripcion set ? WHERE id = ?`, [req.body, id]);
    res.json({ message: "La inscripcion fue actualizada" });
  }
}

const adminInscripController = new AdminInscripController();
export default adminInscripController;
