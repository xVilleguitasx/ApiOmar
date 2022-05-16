import { Router } from 'express';
import multer from "../libs/storageInfoCongreso";
import informacionCongresoController from '../controllers/informacionCongresoController';

class InformacionCongresoRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        var cpUpload = multer.fields([
            { name: "logo", maxCount: 1 },
            { name: "favicon", maxCount: 1 },
          ]);
        this.router.get('/', informacionCongresoController.list);
        this.router.put('/:id',cpUpload,informacionCongresoController.update);
    }

}

export default new InformacionCongresoRoutes().router;

