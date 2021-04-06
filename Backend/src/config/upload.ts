import path from 'path';
import multer from 'multer';
import crypto from 'crypto';

const uploadFolder = path.join(__dirname, '..', '..', 'uploads');

export default {
  directory: uploadFolder,

  storage: multer.diskStorage({
    destination: uploadFolder,
    filename: (request, file, callback) => {
      const fileHash = crypto.randomBytes(10).toString('HEX');
      const filename = `${fileHash}-${file.originalname}`;

      return callback(null, filename);
    },
  }),
};
