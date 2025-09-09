<template>
<section class="section hero">
<div>
<div class="badge">🐾 Software with a little magic</div>
<h1 style="font-size:44px;line-height:1.1;margin:12px 0 10px">
Build fast. Ship reliably. Add a touch of wonder.
</h1>
<p class="muted" style="max-width:60ch">
Magic Cat Software crafts web & mobile apps that purr—clean code, thoughtful UX, and just enough sparkle to delight users and win markets.
</p>
<div style="display:flex;gap:12px;margin-top:18px">
<CTAButton href="/contact">Start a project</CTAButton>
<a class="btn btn--ghost" href="/portfolio">See our work</a>
</div>
<div class="section grid grid-3">
<div class="card" style="padding:18px">
<h3>Custom Development</h3>
<p class="muted">APIs, dashboards, PWAs—tailored to your business.</p>
</div>
<div class="card" style="padding:18px">
<h3>UX & UI Design</h3>
<p class="muted">From wireframe to polish, usable and beautiful.</p>
</div>
<div class="card" style="padding:18px">
<h3>Consulting</h3>
<p class="muted">Architecture, roadmaps, audits, and growth strategy.</p>
</div>
</div>
</div>
<div class="card" style="padding:22px;display:grid;place-items:center;min-height:280px">
<img src="/logo.png" alt="Magic Cat" style="width:160px;height:auto;opacity:.95" />
</div>
</section>
</template>
<script setup>
import CTAButton from '../components/CTAButton.vue';
</script>