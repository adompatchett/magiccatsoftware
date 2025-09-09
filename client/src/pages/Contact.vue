<script setup>
import { ref } from 'vue';
const name = ref('');
const email = ref('');
const message = ref('');
const status = ref('');


async function submit() {
status.value = 'Sending…';
try {
const res = await fetch('/api/contact', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ name: name.value, email: email.value, message: message.value })
});
const data = await res.json();
status.value = data.ok ? 'Thanks! We\'ll be in touch shortly.' : (data.error || 'Something went wrong');
} catch (e) {
status.value = 'Network error';
}
}
</script>


<template>
<section class="section card" style="padding:22px;max-width:720px">
<h1>Contact</h1>
<div class="muted" style="margin-bottom:10px">Tell us about your project.</div>
<form @submit.prevent="submit" class="grid" style="gap:12px">
<input v-model="name" placeholder="Your name" required style="padding:12px;border-radius:12px;border:1px solid var(--border);background:#0d1020;color:var(--text)" />
<input v-model="email" type="email" placeholder="Email" required style="padding:12px;border-radius:12px;border:1px solid var(--border);background:#0d1020;color:var(--text)" />
<textarea v-model="message" rows="6" placeholder="Your message" required style="padding:12px;border-radius:12px;border:1px solid var(--border);background:#0d1020;color:var(--text)"></textarea>
<button class="btn" type="submit">Send message</button>
<div class="muted">{{ status }}</div>
</form>
</section>
</template>