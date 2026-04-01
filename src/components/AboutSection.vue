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
  skills.forEach((skill, i) => {
    gsap.fromTo(`.skill-bar-fill-${i}`, { width: 0 }, {
      width: `${skill.level}%`,
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: { trigger: `.skill-bar-fill-${i}`, start: 'top 85%' }
    })
  })
})
</script>

<template>
  <section id="about" ref="sectionRef" class="py-[120px] bg-bg-2 border-t border-border">
    <div class="max-w-[1200px] mx-auto px-8">
      <div class="grid lg:grid-cols-2 gap-20 items-start">

        <!-- Left: text -->
        <div class="about-text-col">
          <p class="section-label">About Me</p>
          <h2 class="font-syne font-extrabold mb-6" style="font-size: clamp(32px,4vw,52px)">
            Design that lives, breathes, and moves.
          </h2>
          <p class="text-text text-base leading-[1.8] mb-5">
            With over 8 years in the creative industry, I blend graphic design fundamentals
            with the kinetic energy of motion to create experiences that leave a lasting impression.
            From brand films to social content, UI animations to title sequences — I craft motion
            that communicates, captivates, and converts.
          </p>
          <p class="text-text text-base leading-[1.8] mb-10">
            My approach is rooted in conceptual thinking and executed with technical precision.
            Every frame, every curve, every transition is intentional.
          </p>

          <p class="text-[11px] font-semibold tracking-wide15 uppercase text-text-light mb-4">Tools & Software</p>
          <div class="flex flex-wrap gap-2.5">
            <span
              v-for="tool in tools" :key="tool"
              class="text-xs font-semibold px-3.5 py-1.5 rounded-full bg-bg-card border border-border text-text tracking-[0.03em] hover:border-accent hover:text-accent transition-all cursor-default"
            >{{ tool }}</span>
          </div>
        </div>

        <!-- Right: skills + awards -->
        <div class="about-skill-col flex flex-col gap-5">

          <!-- Skill bars -->
          <div class="bg-bg-card border border-border rounded-2xl p-8">
            <h3 class="font-syne text-[18px] font-bold text-heading mb-7">Core Skills</h3>
            <div class="flex flex-col gap-5">
              <div v-for="(skill, i) in skills" :key="skill.name">
                <div class="flex justify-between mb-2">
                  <span class="text-sm font-medium text-heading">{{ skill.name }}</span>
                  <span class="text-[13px] text-accent font-semibold font-syne">{{ skill.level }}%</span>
                </div>
                <div class="h-1 bg-border rounded-full overflow-hidden">
                  <div
                    :class="`skill-bar-fill-${i}`"
                    class="h-full rounded-full"
                    style="background: linear-gradient(to right, #c8f542, #a8d020); width: 0"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Awards -->
          <div class="bg-bg-card border border-border rounded-2xl p-7 flex flex-col gap-5">
            <div v-for="award in [
              { title: 'Awwwards Honorable Mention', year: '2023' },
              { title: 'CSS Design Awards', year: '2022' },
              { title: 'ADC Young Guns', year: '2021' },
            ]" :key="award.title" class="flex items-center gap-4">
              <span class="text-accent text-base flex-shrink-0">✦</span>
              <div>
                <p class="text-sm font-semibold text-heading">{{ award.title }}</p>
                <p class="text-xs text-text-light mt-0.5">{{ award.year }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
