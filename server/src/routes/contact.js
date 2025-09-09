import { Router } from 'express';
import { z } from 'zod';
import { sendContactEmail } from '../utils/mailer.js';
import { safeParse } from '../utils/validate.js';


const router = Router();


const ContactSchema = z.object({
name: z.string().min(1),
email: z.string().email(),
message: z.string().min(10).max(2000)
});


router.post('/', async (req, res) => {
const parsed = safeParse(ContactSchema, req.body);
if (!parsed.success) {
return res.status(400).json({ error: 'Invalid input', details: parsed.error });
}
try {
await sendContactEmail(parsed.data);
res.json({ ok: true });
} catch (e) {
console.error('Contact email error:', e);
res.status(500).json({ error: 'Failed to send message' });
}
});


export default router;