<script setup>
const year = new Date().getFullYear()

const scrollToSection = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const navLinks = [
  ['hero', 'Home'], ['about', 'About'], ['experience', 'Experience'], ['work', 'Work'], ['services', 'Services'], ['contact', 'Contact']
]
const serviceLinks = ['Motion Graphics', 'Brand Identity', 'UI Animation', '3D Design', 'Art Direction']
const socialLinks = ['Behance', 'Instagram', 'LinkedIn', 'Dribbble']
</script>

<template>
  <footer class="bg-bg-2 border-t border-border pt-20 pb-10">
    <div class="max-w-[1200px] mx-auto px-8">

      <!-- Top row -->
      <div class="flex flex-wrap justify-between gap-16 mb-16">
        <div>
          <span class="font-syne font-extrabold text-[32px] text-heading tracking-tightest block mb-3">
            AM<span class="text-accent">.</span>
          </span>
          <p class="text-sm text-text-light max-w-[220px] leading-[1.6]">Crafting motion that moves people.</p>
        </div>

        <nav class="flex flex-wrap gap-16">
          <div>
            <p class="text-[11px] font-bold tracking-wide15 uppercase text-text-light mb-5">Navigate</p>
            <ul class="flex flex-col gap-3">
              <li v-for="[id, label] in navLinks" :key="id">
                <a
                  class="text-sm text-text font-medium hover:text-heading transition-colors"
                  href="#"
                  @click.prevent="scrollToSection(id)"
                >{{ label }}</a>
              </li>
            </ul>
          </div>
          <div>
            <p class="text-[11px] font-bold tracking-wide15 uppercase text-text-light mb-5">Services</p>
            <ul class="flex flex-col gap-3">
              <li v-for="s in serviceLinks" :key="s">
                <a class="text-sm text-text font-medium hover:text-heading transition-colors" href="#" @click.prevent>{{ s }}</a>
              </li>
            </ul>
          </div>
          <div>
            <p class="text-[11px] font-bold tracking-wide15 uppercase text-text-light mb-5">Connect</p>
            <ul class="flex flex-col gap-3">
              <li v-for="s in socialLinks" :key="s">
                <a class="text-sm text-text font-medium hover:text-heading transition-colors" href="#" @click.prevent>{{ s }}</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <!-- Bottom row -->
      <div class="border-t border-border pt-8 flex flex-wrap items-center justify-between gap-4">
        <p class="text-[13px] text-text-light">© {{ year }} Alex Morrow. All rights reserved.</p>
        <div class="flex gap-6">
          <a class="text-[13px] text-text-light hover:text-heading transition-colors" href="#" @click.prevent>Privacy Policy</a>
          <a class="text-[13px] text-text-light hover:text-heading transition-colors" href="#" @click.prevent>Terms</a>
        </div>
        <p class="text-[12px] text-text-light">Built with Vue 3 & GSAP</p>
      </div>
    </div>
  </footer>
</template>
