<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const heroRef = ref(null)
const titleRef = ref(null)
const subtitleRef = ref(null)
const ctaRef = ref(null)
const statsRef = ref(null)
const marqueeRef = ref(null)

const roles = ['Motion Graphics', 'Visual Identity', 'Brand Design', 'Animation', 'Art Direction']

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

  tl.fromTo('.hero-eyebrow', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 })
    .fromTo('.hero-title .line', { opacity: 0, y: 60, skewY: 3 }, { opacity: 1, y: 0, skewY: 0, duration: 1, stagger: 0.12 }, '-=0.4')
    .fromTo('.hero-subtitle', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.5')
    .fromTo('.hero-cta', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 }, '-=0.5')
    .fromTo('.hero-stats', { opacity: 0 }, { opacity: 1, duration: 0.8 }, '-=0.3')

  gsap.to('.marquee-inner', {
    x: '-50%',
    duration: 18,
    ease: 'none',
    repeat: -1,
  })
})
</script>

<template>
  <section id="hero" ref="heroRef" class="hero">
    <div class="container hero-inner">
      <div class="hero-content">
        <p class="hero-eyebrow section-label">Graphics & Motion Designer</p>

        <h1 class="hero-title" ref="titleRef">
          <span class="line">Crafting</span>
          <span class="line accent-line">Visual Stories</span>
          <span class="line">in Motion.</span>
        </h1>

        <p class="hero-subtitle" ref="subtitleRef">
          I'm Alex Morrow — a designer obsessed with bold aesthetics, kinetic typography,
          and motion that moves people. Based in New York, working worldwide.
        </p>

        <div class="hero-cta" ref="ctaRef">
          <a href="#work" class="btn-primary" @click.prevent="$el.closest('#hero').nextElementSibling?.nextElementSibling?.scrollIntoView({ behavior: 'smooth' })">
            View My Work
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
          <a href="#contact" class="btn-ghost" @click.prevent="document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })">
            Get in Touch
          </a>
        </div>

        <div class="hero-stats" ref="statsRef">
          <div class="stat">
            <span class="stat-num">8+</span>
            <span class="stat-label">Years Experience</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <span class="stat-num">120+</span>
            <span class="stat-label">Projects Delivered</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <span class="stat-num">40+</span>
            <span class="stat-label">Clients Worldwide</span>
          </div>
        </div>
      </div>

      <div class="hero-visual">
        <div class="visual-ring ring-1"></div>
        <div class="visual-ring ring-2"></div>
        <div class="visual-ring ring-3"></div>
        <div class="visual-center">
          <svg class="play-icon" width="48" height="48" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="23.5" stroke="var(--accent)" stroke-opacity="0.3"/>
            <path d="M19 16l14 8-14 8V16z" fill="var(--accent)"/>
          </svg>
        </div>
        <div class="floating-tag tag-1">After Effects</div>
        <div class="floating-tag tag-2">Cinema 4D</div>
        <div class="floating-tag tag-3">Figma</div>
      </div>
    </div>

    <div class="marquee-wrapper" ref="marqueeRef">
      <div class="marquee-inner">
        <span v-for="role in [...roles, ...roles, ...roles, ...roles]" :key="Math.random()" class="marquee-item">
          {{ role }} <span class="marquee-sep">✦</span>
        </span>
      </div>
    </div>

    <div class="scroll-hint">
      <div class="scroll-line"></div>
      <span>Scroll</span>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 100px;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: -200px;
  right: -200px;
  width: 700px;
  height: 700px;
  background: radial-gradient(circle, rgba(200, 245, 66, 0.06) 0%, transparent 70%);
  pointer-events: none;
}

.hero-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 100px;
}

.hero-eyebrow {
  margin-bottom: 28px;
}

.hero-title {
  font-size: clamp(52px, 7vw, 96px);
  font-weight: 800;
  margin-bottom: 28px;
  display: flex;
  flex-direction: column;
}

.hero-title .line {
  display: block;
  overflow: hidden;
}

.accent-line {
  color: var(--accent);
}

.hero-subtitle {
  font-size: 17px;
  line-height: 1.75;
  color: var(--text);
  max-width: 440px;
  margin-bottom: 44px;
}

.hero-cta {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 56px;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--accent);
  color: var(--bg);
  font-weight: 600;
  font-size: 15px;
  padding: 14px 28px;
  border-radius: 100px;
  transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
}

.btn-primary:hover {
  background: var(--accent-dark);
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(200, 245, 66, 0.2);
}

.btn-ghost {
  display: inline-flex;
  align-items: center;
  font-weight: 500;
  font-size: 15px;
  color: var(--heading);
  padding: 14px 28px;
  border-radius: 100px;
  border: 1px solid var(--border-hover);
  transition: border-color 0.2s, color 0.2s;
}

.btn-ghost:hover {
  border-color: var(--text);
  color: var(--heading);
}

.hero-stats {
  display: flex;
  gap: 24px;
  align-items: center;
}

.stat {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.stat-num {
  font-family: 'Syne', sans-serif;
  font-size: 28px;
  font-weight: 800;
  color: var(--heading);
  letter-spacing: -0.03em;
}

.stat-label {
  font-size: 12px;
  color: var(--text-light);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-weight: 500;
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: var(--border);
}

.hero-visual {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 480px;
}

.visual-ring {
  position: absolute;
  border-radius: 50%;
  border: 1px solid;
  animation: spin linear infinite;
}

.ring-1 {
  width: 340px;
  height: 340px;
  border-color: rgba(200, 245, 66, 0.1);
  animation-duration: 20s;
}

.ring-2 {
  width: 240px;
  height: 240px;
  border-color: rgba(200, 245, 66, 0.15);
  animation-duration: 15s;
  animation-direction: reverse;
}

.ring-3 {
  width: 140px;
  height: 140px;
  border-color: rgba(200, 245, 66, 0.2);
  animation-duration: 10s;
}

.visual-center {
  position: relative;
  z-index: 2;
}

.play-icon {
  animation: pulse 2.5s ease-in-out infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(0.95); }
}

.floating-tag {
  position: absolute;
  background: var(--bg-card);
  border: 1px solid var(--border);
  color: var(--text);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.05em;
  padding: 8px 14px;
  border-radius: 100px;
  animation: float linear infinite;
}

.tag-1 { top: 20%; right: 10%; animation-duration: 6s; animation-delay: 0s; }
.tag-2 { bottom: 30%; left: 5%; animation-duration: 7s; animation-delay: -2s; }
.tag-3 { bottom: 15%; right: 20%; animation-duration: 5.5s; animation-delay: -4s; }

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.marquee-wrapper {
  width: 100%;
  overflow: hidden;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  padding: 16px 0;
  background: var(--bg-2);
}

.marquee-inner {
  display: flex;
  gap: 0;
  white-space: nowrap;
  width: max-content;
}

.marquee-item {
  font-family: 'Syne', sans-serif;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-light);
  padding: 0 32px;
  transition: color 0.2s;
}

.marquee-item:hover {
  color: var(--accent);
}

.marquee-sep {
  color: var(--accent);
  margin-left: 32px;
}

.scroll-hint {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: var(--text-light);
  font-size: 11px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-weight: 500;
}

.scroll-line {
  width: 1px;
  height: 40px;
  background: linear-gradient(to bottom, transparent, var(--text-light));
  animation: scrollDown 1.5s ease-in-out infinite;
}

@keyframes scrollDown {
  0% { transform: scaleY(0); transform-origin: top; }
  50% { transform: scaleY(1); transform-origin: top; }
  51% { transform: scaleY(1); transform-origin: bottom; }
  100% { transform: scaleY(0); transform-origin: bottom; }
}

@media (max-width: 1024px) {
  .hero-inner {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .hero-visual {
    display: none;
  }
}

@media (max-width: 768px) {
  .hero {
    padding-top: 80px;
  }
  .hero-inner {
    padding-bottom: 80px;
  }
  .hero-cta {
    flex-direction: column;
    align-items: flex-start;
  }
  .hero-stats {
    flex-wrap: wrap;
    gap: 20px;
  }
  .stat-divider {
    display: none;
  }
}
</style>
