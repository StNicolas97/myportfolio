<script setup>
import { diplomas, awards } from '../data/content.js'
</script>

<template>
  <section id="parcours" class="block" aria-labelledby="t-parcours">
    <div class="sec-head">
      <span class="label">Parcours</span>
      <h2 id="t-parcours">Diplômes et certifications</h2>
    </div>
    <div class="row g-0 path">
      <div v-for="d in diplomas" :key="d.title" class="col-12 col-md-6 col-lg-3 step">
        <span class="yr">{{ d.year }}</span>
        <b>{{ d.title }}</b>
        <span class="text-soft">{{ d.school }}</span>
      </div>
    </div>
    <div class="d-flex flex-wrap gap-2 align-items-center">
      <span class="label me-1">Distinctions</span>
      <span v-for="a in awards" :key="a" class="chip">{{ a }}</span>
    </div>
  </section>
</template>
