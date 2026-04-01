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
    id: 1,
    title: 'Neon Dreams',
    category: 'Motion',
    type: 'Motion Graphics',
    year: '2024',
    desc: 'A cinematic title sequence for an independent sci-fi short film with neon-lit typography and particle effects.',
    tags: ['After Effects', 'Cinema 4D'],
    featured: true,
    color: '#c8f542',
    bg: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    pattern: 'M 0 80 Q 50 0 100 80 T 200 80',
  },
  {
    id: 2,
    title: 'Forma Studio',
    category: 'Branding',
    type: 'Brand Identity',
    year: '2024',
    desc: 'Complete visual identity for a Barcelona-based architecture firm — logo, palette, and animated brand assets.',
    tags: ['Figma', 'Illustrator'],
    featured: false,
    color: '#e8d5b7',
    bg: 'linear-gradient(135deg, #1a1200 0%, #2d2000 100%)',
    pattern: 'M 0 50 L 100 0 L 200 50 L 100 100 Z',
  },
  {
    id: 3,
    title: 'Orbit UI',
    category: 'UI/UX',
    type: 'UI Animation',
    year: '2023',
    desc: 'Dashboard micro-interactions and transition design for a SaaS analytics platform.',
    tags: ['Figma', 'Framer'],
    featured: false,
    color: '#7dd3fc',
    bg: 'linear-gradient(135deg, #0c1a2e 0%, #0f2a4a 100%)',
    pattern: 'M 100 10 a 90 90 0 0 1 0 180 a 90 90 0 0 1 0 -180',
  },
  {
    id: 4,
    title: 'Lava Flow',
    category: '3D',
    type: '3D Animation',
    year: '2023',
    desc: 'Abstract fluid simulation rendered in Cinema 4D for a luxury cosmetics launch campaign.',
    tags: ['Cinema 4D', 'Redshift'],
    featured: true,
    color: '#f97316',
    bg: 'linear-gradient(135deg, #1a0800 0%, #2d1200 100%)',
    pattern: 'M 0 100 C 50 0 150 200 200 100',
  },
  {
    id: 5,
    title: 'Pulse Brand',
    category: 'Branding',
    type: 'Brand Identity',
    year: '2023',
    desc: 'Energetic visual identity for a fitness tech startup with animated logo and motion guidelines.',
    tags: ['Illustrator', 'After Effects'],
    featured: false,
    color: '#f43f5e',
    bg: 'linear-gradient(135deg, #1a0010 0%, #2d0020 100%)',
    pattern: 'M 0 50 C 30 20 70 80 100 50 S 170 20 200 50',
  },
  {
    id: 6,
    title: 'Sky Atlas',
    category: 'Motion',
    type: 'Explainer Video',
    year: '2022',
    desc: '90-second animated explainer for a space data startup — designed for clarity and cinematic impact.',
    tags: ['After Effects', 'Illustrator'],
    featured: false,
    color: '#a78bfa',
    bg: 'linear-gradient(135deg, #0d0a1a 0%, #1a1030 100%)',
    pattern: 'M 100 10 L 190 90 L 100 190 L 10 90 Z',
  },
]

const filtered = computed(() => {
  if (activeFilter.value === 'All') return projects
  return projects.filter(p => p.category === activeFilter.value)
})

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
  <section id="work" ref="sectionRef" class="work-section">
    <div class="container">
      <div class="work-header">
        <p class="section-label">Selected Work</p>
        <div class="work-header-row">
          <h2 class="work-title">Projects that define the craft.</h2>
          <div class="filter-bar">
            <button
              v-for="filter in filters"
              :key="filter"
              :class="['filter-btn', { active: activeFilter === filter }]"
              @click="activeFilter = filter"
            >
              {{ filter }}
            </button>
          </div>
        </div>
      </div>

      <div class="work-grid">
        <article
          v-for="project in filtered"
          :key="project.id"
          :class="['project-card', { featured: project.featured }]"
        >
          <div class="card-visual" :style="{ background: project.bg }">
            <svg class="card-svg" viewBox="0 0 200 200" preserveAspectRatio="none">
              <path :d="project.pattern" fill="none" :stroke="project.color" stroke-width="1.5" opacity="0.5"/>
              <circle cx="100" cy="100" r="60" fill="none" :stroke="project.color" stroke-width="0.5" opacity="0.3"/>
              <circle cx="100" cy="100" r="30" fill="none" :stroke="project.color" stroke-width="0.8" opacity="0.4"/>
            </svg>
            <div class="card-overlay">
              <span class="card-year">{{ project.year }}</span>
              <div class="card-tags">
                <span v-for="tag in project.tags" :key="tag" class="card-tag">{{ tag }}</span>
              </div>
            </div>
          </div>
          <div class="card-info">
            <div class="card-meta">
              <span class="card-type" :style="{ color: project.color }">{{ project.type }}</span>
            </div>
            <h3 class="card-title">{{ project.title }}</h3>
            <p class="card-desc">{{ project.desc }}</p>
            <a href="#" class="card-link" @click.prevent>
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

<style scoped>
.work-section {
  padding: 120px 0;
  border-top: 1px solid var(--border);
}

.work-header {
  margin-bottom: 56px;
}

.work-title {
  font-size: clamp(32px, 4vw, 52px);
  font-weight: 800;
}

.work-header-row {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 32px;
  flex-wrap: wrap;
}

.filter-bar {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.filter-btn {
  font-size: 13px;
  font-weight: 600;
  padding: 8px 18px;
  border-radius: 100px;
  border: 1px solid var(--border);
  color: var(--text);
  background: transparent;
  cursor: pointer;
  transition: all 0.2s;
  letter-spacing: 0.02em;
}

.filter-btn:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.filter-btn.active {
  background: var(--accent);
  border-color: var(--accent);
  color: var(--bg);
}

.work-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.project-card.featured {
  grid-column: span 2;
}

.project-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
  transition: border-color 0.3s, transform 0.3s;
  cursor: pointer;
}

.project-card:hover {
  border-color: var(--border-hover);
  transform: translateY(-4px);
}

.card-visual {
  position: relative;
  height: 220px;
  overflow: hidden;
}

.project-card.featured .card-visual {
  height: 280px;
}

.card-svg {
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
}

.card-overlay {
  position: absolute;
  inset: 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-year {
  font-family: 'Syne', sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.15em;
  color: rgba(255,255,255,0.5);
  text-transform: uppercase;
  align-self: flex-end;
}

.card-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.card-tag {
  font-size: 11px;
  font-weight: 600;
  padding: 5px 10px;
  border-radius: 100px;
  background: rgba(0,0,0,0.5);
  color: rgba(255,255,255,0.7);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255,255,255,0.1);
}

.card-info {
  padding: 24px;
}

.card-meta {
  margin-bottom: 8px;
}

.card-type {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.card-title {
  font-size: 22px;
  font-weight: 800;
  margin-bottom: 10px;
  color: var(--heading);
}

.card-desc {
  font-size: 14px;
  line-height: 1.7;
  color: var(--text);
  margin-bottom: 20px;
}

.card-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 600;
  color: var(--heading);
  letter-spacing: 0.02em;
  transition: gap 0.2s, color 0.2s;
}

.card-link:hover {
  gap: 10px;
  color: var(--accent);
}

@media (max-width: 1024px) {
  .work-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .project-card.featured {
    grid-column: span 2;
  }
}

@media (max-width: 640px) {
  .work-section {
    padding: 80px 0;
  }
  .work-grid {
    grid-template-columns: 1fr;
  }
  .project-card.featured {
    grid-column: span 1;
  }
  .work-header-row {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
