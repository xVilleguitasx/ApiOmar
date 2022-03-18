import multer from 'multer'
import path from 'path'
import { v4 as uuidv4 } from 'uuid';

// Settings
const storage = multer.diskStorage({
    destination: 'public/patrocinadores',
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});
export default multer({storage});