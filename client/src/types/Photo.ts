type PhotoSrc = {
  original: string;
  large: string;
  large2x: string;
  medium: string;
  small: string;
  portrait: string;
  landscape: string;
  tiny: string;
};

export type Photo = {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  photographer_id: number;
  avg_color: string;
  src: PhotoSrc;
  alt: string;
};

export type PhotoResponse = {
  data: {
    total_results: number;
    photos: Photo[];
  }
}

export const emptyPhoto: Photo = {
  id: 1,
  width: 1,
  height: 1,
  url: '',
  photographer: 'John Doe',
  photographer_url: '',
  photographer_id: 1,
  avg_color: '',
  src: {
    original: '',
    large: '',
    large2x: '',
    medium: '',
    small: '',
    portrait: '',
    landscape: '',
    tiny: '',
  },
  alt: '',
};
