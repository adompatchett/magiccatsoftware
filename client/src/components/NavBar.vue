<template>
  <header class="nav">
    <div class="nav__inner container">
      <div class="nav__logo">
        <img src="/logo.png" alt="Magic Cat Software" class="logo-badge" />
      </div>
      <nav class="nav__links">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/services">Services</RouterLink>
        <RouterLink to="/portfolio">Portfolio</RouterLink>
        <RouterLink to="/blog">Blog</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
/* 1) Ensure any global .nav__logo background is neutralized */
:global(.nav__logo) {
  background: transparent !important;
}

/* 2) Give the image a solid white badge so it never blends in */
.logo-badge {
  display: block;
  width: 220px;
  background: #000000 !important;
  padding: 10px;
  border-radius: 14px;
  border: 1px solid #e5e7eb;         /* subtle edge so it shows on white */
  box-shadow: 0 2px 6px rgba(0,0,0,.08);
}

/* (optional) extra contrast on pure-white headers */
.nav {
  border-bottom: 1px solid var(--border);
  background: var(--bg);
  position: sticky;
  top: 0;
  z-index: 50;
}
.nav__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  padding: 16px 20px;
}
.nav__links {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
}
.nav__links a {
  color: #000;
  opacity: .9;
  text-decoration: none;
  padding: 8px 10px;
  border-radius: 8px;
  transition: .2s;
}
.nav__links a.router-link-active {
  background: var(--panel);
}
</style>
