import nodemailer from 'nodemailer';


export async function sendContactEmail({ name, email, message }) {
const {
SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS,
CONTACT_EMAIL_TO = 'owner@example.com',
CONTACT_EMAIL_FROM = 'noreply@magiccatsoftware.local'
} = process.env;


// If SMTP not configured, log to console so dev flow still works
if (!SMTP_HOST) {
console.log('\n[Contact Message]\nFrom:', name, `<${email}>`);
console.log('Message:', message, '\n');
return; // no-op in dev
}


const transporter = nodemailer.createTransport({
host: SMTP_HOST,
port: Number(SMTP_PORT || 587),
secure: SMTP_SECURE === 'true',
auth: SMTP_USER ? { user: SMTP_USER, pass: SMTP_PASS } : undefined
});


await transporter.sendMail({
from: CONTACT_EMAIL_FROM,
to: CONTACT_EMAIL_TO,
subject: `New contact from ${name}`,
replyTo: email,
text: message
});
}