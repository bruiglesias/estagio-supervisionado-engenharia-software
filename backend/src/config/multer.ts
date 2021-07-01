import * as multer from 'multer';
import * as path from 'path';
import * as crypto from 'crypto';

module.exports =  {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename(request, file, callback){
            const hash = crypto.randomBytes(6).toString('hex');
            const filename = `${hash}-${file.originalname}`;
            callback(null, filename);
        }
    })
}