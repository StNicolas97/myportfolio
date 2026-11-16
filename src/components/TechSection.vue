<script setup>
import { technologies } from '../data/content.js'
</script>

<template>
  <section id="technologies" class="block" aria-labelledby="t-tech">
    <div class="sec-head">
      <span class="label">Technologies</span>
      <h2 id="t-tech">Mes technologies</h2>
      <p>Les outils que j'utilise pour concevoir, livrer et faire évoluer les solutions.</p>
    </div>
    <div class="row g-0 techs">
      <div v-for="t in technologies" :key="t.group" class="col-12 col-sm-6 col-lg-3 tg">
        <span class="k">{{ t.group }}</span>
        <div class="d-flex flex-wrap gap-2">
          <span v-for="item in t.items" :key="item" class="tech">{{ item }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
