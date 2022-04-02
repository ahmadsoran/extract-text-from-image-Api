import { Router } from "express";
import uploads from "./controllers/upload/uploadImage.js"; import multer from 'multer';
import fs from 'fs'
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (!cb(null, './assets/img/')) {
            fs.mkdirSync('./assets/img', { recursive: true });
        }
        // rename the incoming file to the file's name

        cb(null, './assets/img');

    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})
let upload = multer({
    storage
})
const Route = Router();

Route.post("/", upload.single('image'), uploads.getRequestedImage)

export default Route;