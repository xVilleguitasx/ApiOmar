import { Router } from 'express';
import multer from "../libs/storageInfoCongreso";
import informacionCongresoController from '../controllers/informacionCongresoController';

class InformacionCongresoRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', informacionCongresoController.list);
        this.router.get('/:id', informacionCongresoController.getOne);
        this.router.post('/', informacionCongresoController.create);
        this.router.put('/:id',multer.single("logo"),informacionCongresoController.update);
        this.router.delete('/:id', informacionCongresoController.delete);
    }

}

export default new InformacionCongresoRoutes().router;

