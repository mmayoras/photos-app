import { NextFunction, Request, Response } from 'express';
import axios, { AxiosRequestConfig } from 'axios';

import { Photo } from '../../types/Photo';

class PhotosController {
  public getCuratedPhotos = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    let curatedUrl = 'https://api.pexels.com/v1/curated?per_page=10';
    const { query } = req;
    
    if (query.hasOwnProperty('page')) {
      curatedUrl += `&page=${query['page']}`
    }

    try {
        const options: AxiosRequestConfig = {
            method: 'GET',
            url: curatedUrl,
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

  public getSearchedPhotos = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    let searchUrl = 'https://api.pexels.com/v1/search?per_page=10';
    const { query } = req;
    
    if (query.hasOwnProperty('page')) {
      searchUrl += `&page=${query['page']}`
    }

    if (query.hasOwnProperty('query')) {
      searchUrl += `&query=${query['query']}`
    }

    try {
        const options: AxiosRequestConfig = {
            method: 'GET',
            url: searchUrl,
            headers: {
                "Content-Type": 'application/json',
                Authorization: '9NckufiyswYyeD0Tg843rEfhBjSWPiStiDcCcdkTxHvERyZqiwzvXDT9',
            },
        };
        
        const result = await axios(options);

        console.log(result.status);
        if (result.status === 200 && result.data) {
            res.status(200).json({ data: result.data, message: 'searchPhotos' });
        } else {
            console.log(`Searching photos failed with status: ${result.status}`);
        }
    } catch (error) {
      next(error);
    }
  }
}

export default PhotosController;
