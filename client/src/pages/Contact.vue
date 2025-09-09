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
    status.value = data.ok
      ? '✅ Thanks! We\'ll be in touch shortly.'
      : (data.error || 'Something went wrong');
  } catch (e) {
    status.value = '⚠️ Network error';
  }
}
</script>

<template>
  <section class="contact-section card">
    <h1 class="contact-title">Contact</h1>
    <p class="contact-subtitle">Tell us about your project.</p>

    <form @submit.prevent="submit" class="contact-form">
      <input
        v-model="name"
        type="text"
        placeholder="Your name"
        required
        class="contact-input"
      />

      <input
        v-model="email"
        type="email"
        placeholder="Email"
        required
        class="contact-input"
      />

      <textarea
        v-model="message"
        rows="6"
        placeholder="Your message"
        required
        class="contact-textarea"
      ></textarea>

      <button class="btn contact-btn" type="submit">Send message</button>
      <div class="status">{{ status }}</div>
    </form>
  </section>
</template>

<style scoped>
.contact-section {
  padding: 32px;
  max-width: 720px;
  margin: 60px auto;
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
  color: #000; /* default black font for all text inside */
}

.contact-title {
  font-size: 28px;
  margin-bottom: 6px;
  color: #000; /* black heading */
}

.contact-subtitle {
  color: #000; /* black subtitle */
  margin-bottom: 20px;
}

.contact-form {
  display: grid;
  gap: 16px;
}

.contact-input,
.contact-textarea {
  padding: 14px 16px;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: #f9fafb;
  color: #000; /* black text inside inputs */
  font-size: 15px;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.contact-input::placeholder,
.contact-textarea::placeholder {
  color: #444; /* dark grey placeholder */
}

.contact-input:focus,
.contact-textarea:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.25);
}

.contact-btn {
  justify-content: center;
  font-weight: 600;
}

.status {
  font-size: 14px;
  margin-top: 4px;
  color: #000; /* black for status messages */
}
</style>

