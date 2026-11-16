<script setup>
import { apps } from '../data/content.js'
import MockScreen from './MockScreen.vue'
</script>

<template>
  <section id="applications" class="block" aria-labelledby="t-apps">
    <div class="sec-head">
      <span class="label">Applications</span>
      <h2 id="t-apps">Des applications qui résolvent des besoins réels</h2>
    </div>

    <div class="d-flex flex-column gap-4">
      <article v-for="(app, i) in apps" :key="app.name" class="row g-0 app">
        <div class="col-12 col-lg-6 app-text" :class="{ 'order-lg-2': i % 2 === 1 }">
          <div class="d-flex flex-wrap gap-2">
            <span v-for="t in app.tags" :key="t.label" class="tag" :class="{ live: t.live }">{{ t.label }}</span>
          </div>
          <h3>{{ app.name }}</h3>
          <p class="text-soft mb-0">{{ app.summary }}</p>
          <ul class="features">
            <li v-for="f in app.features" :key="f">{{ f }}</li>
          </ul>
          <div class="stack">{{ app.stack }}</div>
          <a v-if="app.url" class="go" :href="app.url" target="_blank" rel="noopener">
            Ouvrir l'application
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M7 17 17 7M9 7h8v8" /></svg>
          </a>
        </div>
        <div class="col-12 col-lg-6 stage" aria-hidden="true">
          <MockScreen :kind="app.mock" />
          <span class="illus">Illustration de l'interface</span>
        </div>
      </article>
    </div>
  </section>
</template>
