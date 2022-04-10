import { Request, Response } from 'express';
const fs = require('fs')

import pool from '../database';

class EliminarArchivosController {

    public async eliminar(req: Request, res: Response): Promise<void> {
        console.log(req.body.url)
     try {
        fs.unlinkSync(req.body.url);
     } catch (error) {
         
     }
    }

}
const eliminarArchivosController = new EliminarArchivosController;
export default eliminarArchivosController;