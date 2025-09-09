<template>
<a :href="href" class="btn"><slot /> <span aria-hidden>→</span></a>
</template>
<script setup>
defineProps({ href: { type: String, default: '#' } });
</script>