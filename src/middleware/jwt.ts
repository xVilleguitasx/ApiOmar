import { Request,Response,NextFunction } from "express";
import * as jwt from "jsonwebtoken";
export const checkJwt = (req: Request, res: Response,next: NextFunction) =>{
    
    const Secret='CSEI'
    const token  = <string> req.headers['auth'];
    let jwtPayload;
    try {
        jwtPayload = <any>jwt.verify(token,Secret);
        res.locals.jwtPayload = jwtPayload;

    } catch (error) {
        return res.status(401).json({message:'No autorizado'});
    }
    const {Id,username} = jwtPayload;
    const newToken = jwt.sign({Id,username},Secret);
    res.setHeader('token', newToken);
    next();
}
