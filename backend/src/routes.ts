import { Express } from 'express';
import { getBookHandler } from './controllers/books.controller.js';

const routes = (app: Express) => {
    app
        .route('/')
        .get((req, res) => {
            return res.send('GET Hello from express');
        })
        .post((req, res) => {
            return res.send('POST Hello from express');
        });
    
    app.get('/api/books/:bookId/:authorId', getBookHandler);
    
    app.get('/api/redirect', (req, res) => {
        return res.redirect('http://google.de');
    });
};

export default routes;
