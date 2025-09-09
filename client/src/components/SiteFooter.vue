<template>
<footer class="footer">
<div class="footer__inner container">
<div class="muted">© {{ year }} Magic Cat Software</div>
<div class="nav__links">
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