import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';


import brandRoutes from './routes/brand.js';
import contactRoutes from './routes/contact.js';


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5174;
const CORS_ORIGIN = process.env.CORS_ORIGIN || '*';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// Middleware
app.use(helmet());
app.use(cors({ origin: CORS_ORIGIN }));
app.use(compression());
app.use(express.json());
app.use(morgan('dev'));


// Basic rate limit for public endpoints
const limiter = rateLimit({ windowMs: 60 * 1000, max: 100 });
app.use(limiter);


// API routes
app.use('/api/brand', brandRoutes);
app.use('/api/contact', contactRoutes);


// Healthcheck
app.get('/api/health', (req, res) => res.json({ ok: true }));


// In production, serve the built client
const clientDist = path.resolve(__dirname, '../../client/dist');
app.use(express.static(clientDist));
app.get('*', (req, res) => {
res.sendFile(path.join(clientDist, 'index.html'));
});


app.listen(PORT, () => {
console.log(`Magic Cat Software server listening on http://localhost:${PORT}`);
});