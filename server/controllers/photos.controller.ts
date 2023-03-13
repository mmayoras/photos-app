import { NextFunction, Request, Response } from 'express';
import axios, { AxiosRequestConfig } from 'axios';

import { PEXELS_API_ENDPOINT, PEXELS_API_KEY } from '../config';

class PhotosController {
  public getCuratedPhotos = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    let curatedUrl = `${PEXELS_API_ENDPOINT}/curated?per_page=10`;
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
                Authorization: PEXELS_API_KEY,
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
    let searchUrl = `${PEXELS_API_ENDPOINT}/search?per_page=10`;
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
                Authorization: PEXELS_API_KEY,
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
