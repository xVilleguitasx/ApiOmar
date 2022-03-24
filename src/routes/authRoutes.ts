import { Router } from 'express';

import authController from '../controllers/authController';

class AuthController {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.post('/', authController.getOne);
    }

}

export default new AuthController().router;

