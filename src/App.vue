<script setup>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import ParcoursSection from './components/ParcoursSection.vue'
import VisionSection from './components/VisionSection.vue'
import AppsSection from './components/AppsSection.vue'
import TechSection from './components/TechSection.vue'
import SitesSection from './components/SitesSection.vue'
import ContactSection from './components/ContactSection.vue'
import { profile } from './data/content.js'
</script>

<template>
  <NavBar />
  <main class="container-xl px-3 px-md-4">
    <HeroSection />
    <ParcoursSection />
    <VisionSection />
    <AppsSection />
    <TechSection />
    <SitesSection />
    <ContactSection />
    <footer class="site-footer">
      {{ profile.name }} · {{ profile.location }} · Bilingue français et anglais
    </footer>
  </main>
</template>
