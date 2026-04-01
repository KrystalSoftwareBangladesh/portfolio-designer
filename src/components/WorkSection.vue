<script setup>
import { ref, computed, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref(null)
const activeFilter = ref('All')
const filters = ['All', 'Motion', 'Branding', '3D', 'UI/UX']

const projects = [
  {
    id: 1, title: 'Neon Dreams', category: 'Motion', type: 'Motion Graphics', year: '2024',
    desc: 'A cinematic title sequence for an independent sci-fi short film with neon-lit typography and particle effects.',
    tags: ['After Effects', 'Cinema 4D'], featured: true, color: '#c8f542',
    bg: 'linear-gradient(135deg,#1a1a2e,#16213e 50%,#0f3460)',
    pattern: 'M 0 80 Q 50 0 100 80 T 200 80',
  },
  {
    id: 2, title: 'Forma Studio', category: 'Branding', type: 'Brand Identity', year: '2024',
    desc: 'Complete visual identity for a Barcelona-based architecture firm — logo, palette, and animated brand assets.',
    tags: ['Figma', 'Illustrator'], featured: false, color: '#e8d5b7',
    bg: 'linear-gradient(135deg,#1a1200,#2d2000)',
    pattern: 'M 0 50 L 100 0 L 200 50 L 100 100 Z',
  },
  {
    id: 3, title: 'Orbit UI', category: 'UI/UX', type: 'UI Animation', year: '2023',
    desc: 'Dashboard micro-interactions and transition design for a SaaS analytics platform.',
    tags: ['Figma', 'Framer'], featured: false, color: '#7dd3fc',
    bg: 'linear-gradient(135deg,#0c1a2e,#0f2a4a)',
    pattern: 'M 100 10 a 90 90 0 0 1 0 180 a 90 90 0 0 1 0 -180',
  },
  {
    id: 4, title: 'Lava Flow', category: '3D', type: '3D Animation', year: '2023',
    desc: 'Abstract fluid simulation rendered in Cinema 4D for a luxury cosmetics launch campaign.',
    tags: ['Cinema 4D', 'Redshift'], featured: true, color: '#f97316',
    bg: 'linear-gradient(135deg,#1a0800,#2d1200)',
    pattern: 'M 0 100 C 50 0 150 200 200 100',
  },
  {
    id: 5, title: 'Pulse Brand', category: 'Branding', type: 'Brand Identity', year: '2023',
    desc: 'Energetic visual identity for a fitness tech startup with animated logo and motion guidelines.',
    tags: ['Illustrator', 'After Effects'], featured: false, color: '#f43f5e',
    bg: 'linear-gradient(135deg,#1a0010,#2d0020)',
    pattern: 'M 0 50 C 30 20 70 80 100 50 S 170 20 200 50',
  },
  {
    id: 6, title: 'Sky Atlas', category: 'Motion', type: 'Explainer Video', year: '2022',
    desc: '90-second animated explainer for a space data startup — designed for clarity and cinematic impact.',
    tags: ['After Effects', 'Illustrator'], featured: false, color: '#a78bfa',
    bg: 'linear-gradient(135deg,#0d0a1a,#1a1030)',
    pattern: 'M 100 10 L 190 90 L 100 190 L 10 90 Z',
  },
]

const filtered = computed(() =>
  activeFilter.value === 'All' ? projects : projects.filter(p => p.category === activeFilter.value)
)

onMounted(() => {
  gsap.fromTo('.work-header', { opacity: 0, y: 30 }, {
    opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
    scrollTrigger: { trigger: sectionRef.value, start: 'top 80%' }
  })
  gsap.fromTo('.project-card', { opacity: 0, y: 40 }, {
    opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.1,
    scrollTrigger: { trigger: '.work-grid', start: 'top 80%' }
  })
})
</script>

<template>
  <section id="work" ref="sectionRef" class="py-[120px] border-t border-border">
    <div class="max-w-[1200px] mx-auto px-8">

      <!-- Header -->
      <div class="work-header mb-14">
        <p class="section-label">Selected Work</p>
        <div class="flex flex-wrap items-end justify-between gap-8">
          <h2 class="font-syne font-extrabold" style="font-size:clamp(32px,4vw,52px)">
            Projects that define the craft.
          </h2>
          <div class="flex gap-2 flex-wrap">
            <button
              v-for="filter in filters" :key="filter"
              :class="[
                'text-[13px] font-semibold px-[18px] py-2 rounded-full border transition-all tracking-[0.02em]',
                activeFilter === filter
                  ? 'bg-accent border-accent text-bg'
                  : 'bg-transparent border-border text-text hover:border-accent hover:text-accent'
              ]"
              @click="activeFilter = filter"
            >{{ filter }}</button>
          </div>
        </div>
      </div>

      <!-- Grid -->
      <div class="work-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article
          v-for="project in filtered" :key="project.id"
          :class="[
            'project-card bg-bg-card border border-border rounded-2xl overflow-hidden hover:border-border-hover hover:-translate-y-1 transition-all duration-300 cursor-pointer',
            project.featured ? 'lg:col-span-2' : '',
          ]"
        >
          <!-- Visual -->
          <div
            class="relative overflow-hidden"
            :class="project.featured ? 'h-[280px]' : 'h-[220px]'"
            :style="{ background: project.bg }"
          >
            <svg class="absolute inset-0 w-full h-full" viewBox="0 0 200 200" preserveAspectRatio="none">
              <path :d="project.pattern" fill="none" :stroke="project.color" stroke-width="1.5" opacity="0.5"/>
              <circle cx="100" cy="100" r="60" fill="none" :stroke="project.color" stroke-width="0.5" opacity="0.3"/>
              <circle cx="100" cy="100" r="30" fill="none" :stroke="project.color" stroke-width="0.8" opacity="0.4"/>
            </svg>
            <div class="absolute inset-0 p-5 flex flex-col justify-between">
              <span class="self-end font-syne text-[11px] font-bold tracking-wide15 uppercase text-white/50">{{ project.year }}</span>
              <div class="flex gap-2 flex-wrap">
                <span
                  v-for="tag in project.tags" :key="tag"
                  class="text-[11px] font-semibold px-2.5 py-1.5 rounded-full bg-black/50 text-white/70 backdrop-blur-sm border border-white/10"
                >{{ tag }}</span>
              </div>
            </div>
          </div>

          <!-- Info -->
          <div class="p-6">
            <p class="text-[11px] font-bold tracking-wide12 uppercase mb-2" :style="{ color: project.color }">{{ project.type }}</p>
            <h3 class="font-syne text-[22px] font-extrabold text-heading mb-2.5">{{ project.title }}</h3>
            <p class="text-sm text-text leading-[1.7] mb-5">{{ project.desc }}</p>
            <a
              class="inline-flex items-center gap-1.5 text-[13px] font-semibold text-heading tracking-[0.02em] hover:gap-2.5 hover:text-accent transition-all"
              href="#" @click.prevent
            >
              View Project
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
