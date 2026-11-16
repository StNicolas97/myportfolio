<script setup>
import { profile } from '../data/content.js'
</script>

<template>
  <header id="top" class="hero">
    <h1>
      <span>Des outils web</span> <span>qui servent</span> <span><em>vraiment.</em></span>
    </h1>
    <div class="d-flex flex-wrap gap-4 align-items-end justify-content-between">
      <p class="intro mb-0">Je suis <b>{{ profile.name }}</b>, {{ profile.intro }}</p>
      <div class="d-flex flex-wrap gap-2">
        <a class="btn btn-ink rounded-pill" href="#applications">
          Voir les projets
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 5v14M6 13l6 6 6-6" /></svg>
        </a>
        <a class="btn btn-outline-ink rounded-pill" href="#contact">Me joindre</a>
      </div>
    </div>
  </header>
</template>
