<template>
  <footer class="footer">
    <div class="footer__inner container">
      <div class="footer__left">© {{ year }} Magic Cat Software</div>
      <div class="footer__links">
        <a href="https://github.com/your-org" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://x.com/your-handle" target="_blank" rel="noreferrer">X</a>
        <a href="https://www.linkedin.com/company/your-company/" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear();
</script>

<style scoped>
.footer {
  background: #ffffff;                /* white footer to match header */
  border-top: 1px solid var(--border);
  padding: 24px 0;
  margin-top: 40px;
}

.footer__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;                    /* stacks on small screens */
  gap: 16px;
}

.footer__left {
  font-size: 14px;
  color: #000000;
  opacity: 0.8;
}

.footer__links {
  display: flex;
  gap: 20px;
}

.footer__links a {
  color: #000000;
  font-size: 14px;
  text-decoration: none;
  transition: color 0.2s, transform 0.2s;
}

.footer__links a:hover {
  color: var(--accent);               /* purple hover */
  transform: translateY(-2px);
}
</style>
