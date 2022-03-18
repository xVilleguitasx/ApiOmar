import { Request, Response } from 'express';
import fs from 'fs';

import pool from '../database';

class FacturaController {

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        req.body.factura = req.file?.path;
        await pool.query('UPDATE inscripcion set ? WHERE id_per_pert = ?', [req.body, id]);
        res.json({ message: "Inscripción actualizada" });
    

    }

    
}

const facturaController = new FacturaController;
export default facturaController;