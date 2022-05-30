import express, { Router } from 'express';
import multer from "../libs/storagePrograma";
import programaController from '../controllers/programaController';

class ProgramaRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        var cpUpload = multer.fields([
            { name: "imagen", maxCount: 1 },
            { name: "triptico", maxCount: 1 },
          ]);
        this.router.get('/', programaController.list);
        this.router.get('/:id', programaController.getOne);
        this.router.post('/',cpUpload, programaController.create);
        this.router.put('/:id',cpUpload, programaController.update);
        this.router.delete('/:id', programaController.delete);
    }

}

export default new ProgramaRoutes().router;

