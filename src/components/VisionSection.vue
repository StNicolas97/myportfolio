<script setup>
import { beliefs } from '../data/content.js'
</script>

<template>
  <section id="vision" class="block" aria-labelledby="t-vision">
    <span class="label">Vision</span>
    <p id="t-vision" class="vision-lead">
      La technologie compte le plus quand elle aide <em>ceux qui aident les autres.</em>
    </p>
    <div class="row g-4">
      <div v-for="b in beliefs" :key="b.title" class="col-12 col-md-4">
        <div class="belief">
          <b>{{ b.title }}</b>
          <p>{{ b.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
