import { Router } from 'express';
import * as imageController from '../controllers/image.js';
import upload from '../services/Upload.js';

const imageRouter = Router();

imageRouter
  .route('/')
  .get(imageController.getAllImages)
  .post(upload.single('image'), imageController.uploadImage);

export default imageRouter;
