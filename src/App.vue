<script setup>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import WorkSection from './components/WorkSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<template>
  <NavBar />
  <main class="relative">
    <HeroSection />
    <AboutSection />
    <ExperienceSection />
    <WorkSection />
    <ServicesSection />
    <ContactSection />
  </main>
  <FooterSection />
</template>
