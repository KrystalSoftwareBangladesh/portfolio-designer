<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref(null)

const services = [
  {
    title: 'Motion Graphics',
    desc: 'Kinetic typography, animated infographics, broadcast graphics, and social media animations that bring ideas to life with fluid movement.',
    deliverables: ['Title Sequences', 'Animated Explainers', 'Social Content', 'Broadcast Packages'],
    icon: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M4 14h20M14 4v20M7 7l14 14M21 7L7 21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  },
  {
    title: 'Brand Identity',
    desc: 'Crafting cohesive visual systems from logo marks to full brand guidelines — with motion principles woven in from the start.',
    deliverables: ['Logo Design', 'Brand Guidelines', 'Animated Logos', 'Brand Films'],
    icon: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="10" stroke="currentColor" stroke-width="1.5"/><path d="M14 4C14 4 8 10 8 14s6 10 6 10M14 4c0 0 6 6 6 10s-6 10-6 10M4 14h20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  },
  {
    title: 'UI Animation',
    desc: 'Micro-interactions, page transitions, and loading states that elevate digital products from functional to delightful.',
    deliverables: ['Micro-interactions', 'Page Transitions', 'Lottie Files', 'Prototypes'],
    icon: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="3" y="3" width="22" height="16" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M10 25h8M14 19v6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M10 11l3 3 5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  },
  {
    title: '3D Design & Animation',
    desc: 'From product visualizations to abstract sculpted worlds — immersive 3D content rendered for any medium.',
    deliverables: ['Product Renders', '3D Explainers', 'Abstract Motion', 'VR Assets'],
    icon: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 3L3 9v10l11 6 11-6V9L14 3z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M3 9l11 6m0 0l11-6m-11 6v10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  },
  {
    title: 'Art Direction',
    desc: 'Strategic creative leadership for campaigns, editorial work, and digital experiences — from concept to final delivery.',
    deliverables: ['Campaign Strategy', 'Creative Direction', 'Mood Boards', 'Style Guides'],
    icon: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M5 8h18M5 14h12M5 20h8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  },
  {
    title: 'Video Production',
    desc: 'End-to-end video creation from concept and storyboarding to color grading and sound design.',
    deliverables: ['Brand Films', 'Commercial Videos', 'Color Grading', 'Sound Design'],
    icon: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 4v8l5 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="14" cy="14" r="10" stroke="currentColor" stroke-width="1.5"/></svg>`,
  },
]

onMounted(() => {
  gsap.fromTo('.service-card', { opacity: 0, y: 50 }, {
    opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.1,
    scrollTrigger: { trigger: sectionRef.value, start: 'top 75%' }
  })
})
</script>

<template>
  <section id="services" ref="sectionRef" class="py-[120px] bg-bg-2 border-t border-border">
    <div class="max-w-[1200px] mx-auto px-8">

      <!-- Header -->
      <div class="mb-16">
        <p class="section-label">Services</p>
        <div class="flex flex-wrap items-end gap-12">
          <h2 class="font-syne font-extrabold flex-shrink-0" style="font-size:clamp(32px,4vw,52px)">
            What I bring to the table.
          </h2>
          <p class="text-base text-text max-w-[360px] leading-[1.7] flex-shrink-0">
            From concept to final output — every step of the creative process, handled with care and expertise.
          </p>
        </div>
      </div>

      <!-- Services grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border rounded-2xl overflow-hidden mb-12">
        <div
          v-for="service in services" :key="service.title"
          class="service-card bg-bg-card p-9 hover:bg-bg-2 transition-colors"
        >
          <div class="text-accent mb-5" v-html="service.icon"></div>
          <h3 class="font-syne text-[20px] font-bold text-heading mb-3">{{ service.title }}</h3>
          <p class="text-sm text-text leading-[1.75] mb-5">{{ service.desc }}</p>
          <ul class="flex flex-col gap-1.5">
            <li
              v-for="item in service.deliverables" :key="item"
              class="text-xs font-semibold text-text-light tracking-[0.03em] pl-3.5 relative before:content-['→'] before:absolute before:left-0 before:text-accent before:text-[11px]"
            >{{ item }}</li>
          </ul>
        </div>
      </div>

      <!-- CTA block -->
      <div class="bg-bg-card border border-border rounded-2xl p-12 flex flex-wrap items-center justify-between gap-8">
        <div>
          <h3 class="font-syne text-[28px] font-extrabold text-heading mb-2">Have a project in mind?</h3>
          <p class="text-base text-text">Let's discuss how motion and design can tell your story.</p>
        </div>
        <a
          class="inline-flex items-center gap-2.5 bg-accent text-bg font-bold text-[15px] px-8 py-4 rounded-full whitespace-nowrap hover:bg-accent-dark hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(200,245,66,0.25)] transition-all"
          href="#"
          @click.prevent="document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})"
        >
          Start a Project
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>
