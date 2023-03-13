import { Router } from 'express';

import PhotosController from '../controllers/photos.controller';
import { Routes } from '../interfaces/routes.interface';

class PhotosRoute implements Routes {
  public path = '/photos';
  public router = Router();
  public photosController = new PhotosController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/curated`, this.photosController.getCuratedPhotos);
    this.router.get(`${this.path}/search`, this.photosController.getSearchedPhotos);
  }
}

export default PhotosRoute;
