import App from './app';
import PhotosRoute from './routes/photos.routes';

const app = new App([new PhotosRoute()]);

app.listen();
