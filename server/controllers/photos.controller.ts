import { NextFunction, Request, Response } from 'express';
import axios, { AxiosRequestConfig } from 'axios';

import { Photo } from '../../types/Photo';

class PhotosController {
  public getCuratedPhotos = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    let pexelsUrl = 'https://api.pexels.com/v1/curated?per_page=10';
    const { query } = req;
    
    if (query.hasOwnProperty('page')) {
      pexelsUrl += `&page=${query['page']}`
    }
    
    console.log(pexelsUrl);
    try {
        const options: AxiosRequestConfig = {
            method: 'GET',
            url: pexelsUrl,
            headers: {
                "Content-Type": 'application/json',
                Authorization: '9NckufiyswYyeD0Tg843rEfhBjSWPiStiDcCcdkTxHvERyZqiwzvXDT9',
            },
        };
        
        const result = await axios(options);

        if (result.status === 200 && result.data) {
            res.status(200).json({ data: result.data, message: 'getPhotos' });
        } else {
            console.log(`Curated photos failed with status: ${result.status}`);
        }
    } catch (error) {
      next(error);
    }
  };
}

export default PhotosController;
