<script setup>
import { profile } from '../data/content.js'

const links = [
  { href: '#parcours', label: 'Parcours' },
  { href: '#vision', label: 'Vision' },
  { href: '#applications', label: 'Applications' },
  { href: '#technologies', label: 'Technologies' },
  { href: '#sites', label: 'Sites web' },
  { href: '#contact', label: 'Contact' },
]
</script>

<template>
  <nav class="navbar navbar-expand-lg sticky-top site-nav" aria-label="Navigation principale">
    <div class="container-xl px-3 px-md-4">
      <a class="navbar-brand brand" href="#top">
        <span class="mark" aria-hidden="true">N</span>{{ profile.name }}
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu"
        aria-controls="menu" aria-expanded="false" aria-label="Ouvrir le menu">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="menu" class="collapse navbar-collapse justify-content-end">
        <ul class="navbar-nav gap-lg-3">
          <li v-for="l in links" :key="l.href" class="nav-item">
            <a class="nav-link" :href="l.href">{{ l.label }}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
