<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref(null)

const skills = [
  { name: 'Motion Graphics', level: 95 },
  { name: 'Brand Identity', level: 90 },
  { name: '3D Animation', level: 80 },
  { name: 'UI/UX Design', level: 85 },
  { name: 'Typography', level: 92 },
  { name: 'Video Editing', level: 88 },
]

const tools = ['After Effects', 'Cinema 4D', 'Figma', 'Premiere Pro', 'Illustrator', 'Photoshop', 'Blender', 'DaVinci Resolve']

onMounted(() => {
  gsap.fromTo('.about-text-col', { opacity: 0, x: -50 }, {
    opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
    scrollTrigger: { trigger: sectionRef.value, start: 'top 75%' }
  })
  gsap.fromTo('.about-skill-col', { opacity: 0, x: 50 }, {
    opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
    scrollTrigger: { trigger: sectionRef.value, start: 'top 75%' }
  })

  skills.forEach((_, i) => {
    gsap.fromTo(`.skill-bar-fill-${i}`, { width: 0 }, {
      width: `${skills[i].level}%`,
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: { trigger: `.skill-bar-fill-${i}`, start: 'top 85%' }
    })
  })
})
</script>

<template>
  <section id="about" ref="sectionRef" class="about-section">
    <div class="container">
      <div class="about-grid">
        <div class="about-text-col">
          <p class="section-label">About Me</p>
          <h2 class="about-title">Design that lives, breathes, and moves.</h2>
          <p class="about-desc">
            With over 8 years in the creative industry, I blend graphic design fundamentals
            with the kinetic energy of motion to create experiences that leave a lasting impression.
            From brand films to social content, UI animations to title sequences — I craft motion
            that communicates, captivates, and converts.
          </p>
          <p class="about-desc">
            My approach is rooted in conceptual thinking and executed with technical precision.
            Every frame, every curve, every transition is intentional.
          </p>

          <div class="tools-section">
            <p class="tools-label">Tools & Software</p>
            <div class="tools-list">
              <span v-for="tool in tools" :key="tool" class="tool-tag">{{ tool }}</span>
            </div>
          </div>
        </div>

        <div class="about-skill-col">
          <div class="skills-wrapper">
            <h3 class="skills-title">Core Skills</h3>
            <div class="skills-list">
              <div v-for="(skill, i) in skills" :key="skill.name" class="skill-item">
                <div class="skill-header">
                  <span class="skill-name">{{ skill.name }}</span>
                  <span class="skill-level">{{ skill.level }}%</span>
                </div>
                <div class="skill-bar">
                  <div :class="`skill-bar-fill skill-bar-fill-${i}`"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="awards-card">
            <div class="award-item">
              <span class="award-icon">✦</span>
              <div>
                <p class="award-title">Awwwards Honorable Mention</p>
                <p class="award-year">2023</p>
              </div>
            </div>
            <div class="award-item">
              <span class="award-icon">✦</span>
              <div>
                <p class="award-title">CSS Design Awards</p>
                <p class="award-year">2022</p>
              </div>
            </div>
            <div class="award-item">
              <span class="award-icon">✦</span>
              <div>
                <p class="award-title">ADC Young Guns</p>
                <p class="award-year">2021</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  padding: 120px 0;
  background: var(--bg-2);
  border-top: 1px solid var(--border);
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;
}

.about-title {
  font-size: clamp(32px, 4vw, 52px);
  font-weight: 800;
  margin-bottom: 24px;
  line-height: 1.1;
}

.about-desc {
  color: var(--text);
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 20px;
}

.tools-section {
  margin-top: 40px;
}

.tools-label {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text-light);
  margin-bottom: 16px;
}

.tools-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tool-tag {
  font-size: 12px;
  font-weight: 600;
  padding: 6px 14px;
  border-radius: 100px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  color: var(--text);
  letter-spacing: 0.03em;
  transition: border-color 0.2s, color 0.2s;
}

.tool-tag:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.skills-wrapper {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 32px;
  margin-bottom: 20px;
}

.skills-title {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 28px;
  color: var(--heading);
}

.skills-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.skill-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}

.skill-name {
  font-size: 14px;
  font-weight: 500;
  color: var(--heading);
}

.skill-level {
  font-size: 13px;
  color: var(--accent);
  font-weight: 600;
  font-family: 'Syne', sans-serif;
}

.skill-bar {
  height: 4px;
  background: var(--border);
  border-radius: 100px;
  overflow: hidden;
}

.skill-bar-fill {
  height: 100%;
  background: linear-gradient(to right, var(--accent), var(--accent-dark));
  border-radius: 100px;
  width: 0;
}

.awards-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.award-item {
  display: flex;
  align-items: center;
  gap: 16px;
}

.award-icon {
  color: var(--accent);
  font-size: 16px;
  flex-shrink: 0;
}

.award-title {
  font-size: 14px;
  font-weight: 600;
  color: var(--heading);
}

.award-year {
  font-size: 12px;
  color: var(--text-light);
  margin-top: 2px;
}

@media (max-width: 1024px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 48px;
  }
}

@media (max-width: 768px) {
  .about-section {
    padding: 80px 0;
  }
}
</style>
