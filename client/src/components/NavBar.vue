<template>
<header class="nav">
<div class="nav__inner container">
<div class="nav__logo">
<img src="/logo.png" alt="Magic Cat Logo" style="width:220px;height:auto;background:#ffffff;padding:12px;border-radius:16px" />
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