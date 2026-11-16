<script setup>
import { ref } from 'vue'
import { profile } from '../data/content.js'

const copied = ref('')
async function copy(key, text) {
  try {
    await navigator.clipboard.writeText(text)
    copied.value = key
    setTimeout(() => (copied.value = ''), 1600)
  } catch {
    copied.value = ''
  }
}
</script>

<template>
  <section id="contact" class="block" aria-labelledby="t-contact">
    <div class="row g-4 align-items-start">
      <div class="col-12 col-lg-6">
        <div class="sec-head">
          <span class="label">Contact</span>
          <h2 id="t-contact">Travaillons ensemble</h2>
          <p>Vous avez un besoin à régler ou un poste à pourvoir ? Écrivez-moi, je réponds rapidement.</p>
        </div>
      </div>
      <div class="col-12 col-lg-6">
        <div class="lines">
          <div class="line">
            <div><span class="k">Courriel</span><a class="v" :href="`mailto:${profile.email}`">{{ profile.email }}</a></div>
            <button class="copy" type="button" @click="copy('mail', profile.email)">{{ copied === 'mail' ? 'Copié' : 'Copier' }}</button>
          </div>
          <div class="line">
            <div><span class="k">Téléphone</span><a class="v" :href="`tel:${profile.phone.replace(/\s/g, '')}`">{{ profile.phone }}</a></div>
            <button class="copy" type="button" @click="copy('tel', profile.phone)">{{ copied === 'tel' ? 'Copié' : 'Copier' }}</button>
          </div>
          <div class="line">
            <div><span class="k">GitHub</span><a class="v" :href="profile.github.url" target="_blank" rel="noopener">{{ profile.github.label }}</a></div>
          </div>
          <div class="line">
            <div><span class="k">LinkedIn</span><a class="v" :href="profile.linkedin.url" target="_blank" rel="noopener">{{ profile.linkedin.label }}</a></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
