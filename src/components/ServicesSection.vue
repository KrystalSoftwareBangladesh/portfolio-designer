<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref(null)

const services = [
  {
    icon: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M4 14h20M14 4v20M7 7l14 14M21 7L7 21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`,
    title: 'Motion Graphics',
    desc: 'Kinetic typography, animated infographics, broadcast graphics, and social media animations that bring ideas to life with fluid movement.',
    deliverables: ['Title Sequences', 'Animated Explainers', 'Social Content', 'Broadcast Packages'],
  },
  {
    icon: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="10" stroke="currentColor" stroke-width="1.5"/>
      <path d="M14 4C14 4 8 10 8 14s6 10 6 10M14 4c0 0 6 6 6 10s-6 10-6 10M4 14h20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`,
    title: 'Brand Identity',
    desc: 'Crafting cohesive visual systems from logo marks to full brand guidelines — with motion principles woven in from the start.',
    deliverables: ['Logo Design', 'Brand Guidelines', 'Animated Logos', 'Brand Films'],
  },
  {
    icon: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="3" y="3" width="22" height="16" rx="2" stroke="currentColor" stroke-width="1.5"/>
      <path d="M10 25h8M14 19v6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M10 11l3 3 5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
    title: 'UI Animation',
    desc: 'Micro-interactions, page transitions, and loading states that elevate digital products from functional to delightful.',
    deliverables: ['Micro-interactions', 'Page Transitions', 'Lottie Files', 'Prototypes'],
  },
  {
    icon: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M14 3L3 9v10l11 6 11-6V9L14 3z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
      <path d="M3 9l11 6m0 0l11-6m-11 6v10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`,
    title: '3D Design & Animation',
    desc: 'From product visualizations to abstract sculpted worlds — immersive 3D content rendered for any medium.',
    deliverables: ['Product Renders', '3D Explainers', 'Abstract Motion', 'VR Assets'],
  },
  {
    icon: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M5 8h18M5 14h12M5 20h8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`,
    title: 'Art Direction',
    desc: 'Strategic creative leadership for campaigns, editorial work, and digital experiences — from concept to final delivery.',
    deliverables: ['Campaign Strategy', 'Creative Direction', 'Mood Boards', 'Style Guides'],
  },
  {
    icon: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M14 4v8l5 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      <circle cx="14" cy="14" r="10" stroke="currentColor" stroke-width="1.5"/>
    </svg>`,
    title: 'Video Production',
    desc: 'End-to-end video creation from concept and storyboarding to color grading and sound design for brand and commercial work.',
    deliverables: ['Brand Films', 'Commercial Videos', 'Color Grading', 'Sound Design'],
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
  <section id="services" ref="sectionRef" class="services-section">
    <div class="container">
      <div class="services-header">
        <p class="section-label">Services</p>
        <div class="services-header-row">
          <h2 class="services-title">What I bring to the table.</h2>
          <p class="services-sub">From concept to final output — every step of the creative process, handled with care and expertise.</p>
        </div>
      </div>

      <div class="services-grid">
        <div v-for="service in services" :key="service.title" class="service-card">
          <div class="service-icon" v-html="service.icon"></div>
          <h3 class="service-title">{{ service.title }}</h3>
          <p class="service-desc">{{ service.desc }}</p>
          <ul class="service-deliverables">
            <li v-for="item in service.deliverables" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>

      <div class="services-cta">
        <div class="cta-card">
          <div class="cta-text">
            <h3>Have a project in mind?</h3>
            <p>Let's discuss how motion and design can tell your story.</p>
          </div>
          <a href="#contact" class="cta-btn" @click.prevent="document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })">
            Start a Project
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-section {
  padding: 120px 0;
  background: var(--bg-2);
  border-top: 1px solid var(--border);
}

.services-header {
  margin-bottom: 64px;
}

.services-title {
  font-size: clamp(32px, 4vw, 52px);
  font-weight: 800;
  flex-shrink: 0;
}

.services-header-row {
  display: flex;
  align-items: flex-end;
  gap: 48px;
  flex-wrap: wrap;
}

.services-sub {
  font-size: 16px;
  color: var(--text);
  max-width: 360px;
  line-height: 1.7;
  flex-shrink: 0;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
  background: var(--border);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 48px;
}

.service-card {
  background: var(--bg-card);
  padding: 36px 32px;
  transition: background 0.3s;
}

.service-card:hover {
  background: var(--bg-2);
}

.service-icon {
  color: var(--accent);
  margin-bottom: 20px;
}

.service-title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 12px;
  color: var(--heading);
}

.service-desc {
  font-size: 14px;
  line-height: 1.75;
  color: var(--text);
  margin-bottom: 20px;
}

.service-deliverables {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.service-deliverables li {
  font-size: 12px;
  font-weight: 600;
  color: var(--text-light);
  letter-spacing: 0.03em;
  padding-left: 14px;
  position: relative;
}

.service-deliverables li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--accent);
  font-size: 11px;
}

.services-cta {
  margin-top: 16px;
}

.cta-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  flex-wrap: wrap;
}

.cta-text h3 {
  font-size: 28px;
  font-weight: 800;
  margin-bottom: 8px;
}

.cta-text p {
  color: var(--text);
  font-size: 16px;
}

.cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: var(--accent);
  color: var(--bg);
  font-weight: 700;
  font-size: 15px;
  padding: 16px 32px;
  border-radius: 100px;
  white-space: nowrap;
  transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
}

.cta-btn:hover {
  background: var(--accent-dark);
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(200, 245, 66, 0.25);
}

@media (max-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .services-section {
    padding: 80px 0;
  }
  .services-grid {
    grid-template-columns: 1fr;
  }
  .cta-card {
    flex-direction: column;
    align-items: flex-start;
    padding: 32px;
  }
  .services-header-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
}
</style>
