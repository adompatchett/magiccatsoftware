import { Router } from 'express';
const router = Router();


// Basic brand/site metadata the client can consume
router.get('/', (req, res) => {
res.json({
name: 'Magic Cat Software',
tagline: 'Software with a little magic.',
links: {
github: 'https://github.com/your-org',
twitter: 'https://x.com/your-handle',
linkedin: 'https://www.linkedin.com/company/your-company/'
},
nav: [
{ to: '/', label: 'Home' },
{ to: '/services', label: 'Services' },
{ to: '/portfolio', label: 'Portfolio' },
{ to: '/blog', label: 'Blog' },
{ to: '/about', label: 'About' },
{ to: '/contact', label: 'Contact' }
]
});
});

export default router;