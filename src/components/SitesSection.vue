<script setup>
import { ref, computed } from 'vue'
import { sites, moreSites } from '../data/content.js'

const cats = [
  { key: 'tous', label: 'Tous' },
  { key: 'boutique', label: 'Boutiques en ligne' },
  { key: 'vitrine', label: 'Sites vitrines' },
]
const labels = { boutique: 'Boutique', vitrine: 'Vitrine' }
const current = ref('tous')
const count = (k) => (k === 'tous' ? sites.length : sites.filter((s) => s.cat === k).length)
const shown = computed(() => sites.filter((s) => current.value === 'tous' || s.cat === current.value))
const colClass = (s) => (current.value === 'tous' && s.wide ? 'col-12 col-md-6 col-lg-8 wide' : 'col-12 col-md-6 col-lg-4')
</script>

<template>
  <section id="sites" class="block" aria-labelledby="t-sites">
    <div class="sec-head">
      <span class="label">Sites web</span>
      <h2 id="t-sites">Environ 50 sites web refaits ou transformés en boutiques</h2>
      <p>Refontes de sites et conversions en boutiques Facebook et Instagram, pour des clients en France, en Afrique et en Allemagne. En voici quelques-uns.</p>
    </div>

    <div class="d-flex flex-wrap gap-2" role="group" aria-label="Filtrer les sites">
      <button v-for="c in cats" :key="c.key" type="button" class="filter"
        :aria-pressed="current === c.key" @click="current = c.key">
        {{ c.label }}<span class="n">{{ count(c.key) }}</span>
      </button>
    </div>

    <TransitionGroup name="fade" tag="div" class="row g-4">
      <div v-for="s in shown" :key="s.name" :class="colClass(s)">
        <a class="site" :href="s.url" target="_blank" rel="noopener">
          <div class="shot">
            <img :src="s.img" :alt="`Page d'accueil de ${s.name}`" />
            <span class="visit">Visiter le site ↗</span>
          </div>
          <div class="meta"><b>{{ s.name }}</b><span>{{ labels[s.cat] }}</span></div>
          <p>{{ s.text }}</p>
        </a>
      </div>
    </TransitionGroup>

    <div class="d-flex flex-wrap gap-2 align-items-center more">
      <span class="label me-1">Aussi</span>
      <a v-for="m in moreSites" :key="m.name" :href="m.url" target="_blank" rel="noopener">{{ m.name }}</a>
    </div>
  </section>
</template>
