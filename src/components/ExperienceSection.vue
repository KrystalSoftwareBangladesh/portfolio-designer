<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref(null)

const jobs = [
  {
    role: 'Senior Motion Designer',
    company: 'Phantom Studio',
    location: 'New York, NY',
    period: '2022 — Present',
    type: 'Full-time',
    logo: 'PS',
    color: '#c8f542',
    desc: 'Lead the motion design team of four, overseeing the creative direction of brand films, animated campaigns, and digital experiences for Fortune 500 clients. Drive the studio\'s motion language across all output.',
    highlights: [
      'Directed 30+ brand motion campaigns reaching 200M+ impressions combined',
      'Established company-wide motion guidelines adopted across all client projects',
      'Mentored three junior designers now leading their own projects',
      'Delivered title sequences for two Sundance-selected short films',
    ],
    tags: ['After Effects', 'Cinema 4D', 'Figma', 'Redshift'],
  },
  {
    role: 'Motion Graphics Designer',
    company: 'Flux Creative Agency',
    location: 'Brooklyn, NY',
    period: '2020 — 2022',
    type: 'Full-time',
    logo: 'FC',
    color: '#7dd3fc',
    desc: 'Produced motion graphics and animated content for a diverse portfolio of tech startups and consumer brands. Collaborated closely with strategists and copywriters to translate briefs into compelling visual stories.',
    highlights: [
      'Created animated explainer videos increasing client conversion rates by avg. 34%',
      'Designed and animated complete brand identity systems for 12+ startups',
      'Built a reusable After Effects template library cutting production time by 40%',
      'Led motion work on a Super Bowl commercial campaign (Cannes Lions shortlisted)',
    ],
    tags: ['After Effects', 'Illustrator', 'Premiere Pro', 'Lottie'],
  },
  {
    role: 'Visual Designer & Animator',
    company: 'Neon Republic',
    location: 'Remote',
    period: '2018 — 2020',
    type: 'Full-time',
    logo: 'NR',
    color: '#a78bfa',
    desc: 'Crafted visual identities and motion content for independent music artists, record labels, and entertainment brands. Thrived in a fast-paced environment delivering high-quality work under tight turnarounds.',
    highlights: [
      'Designed music video visual effects and lyric animations for 40+ tracks',
      'Developed recognisable visual identities for three Grammy-nominated artists',
      'Produced social-first motion content averaging 5M+ organic views per campaign',
      'Collaborated with directors and VFX teams on four commercially released music videos',
    ],
    tags: ['After Effects', 'Photoshop', 'Premiere Pro', 'DaVinci Resolve'],
  },
  {
    role: 'Junior Graphic Designer',
    company: 'Outline Studio',
    location: 'New York, NY',
    period: '2016 — 2018',
    type: 'Full-time',
    logo: 'OS',
    color: '#fb923c',
    desc: 'Began my professional career supporting senior designers with print and digital work, quickly expanding into motion. Developed a strong foundation in typography, layout, and brand systems.',
    highlights: [
      'Supported brand identity projects for 20+ mid-size businesses',
      'Self-taught After Effects and began leading motion projects within 6 months',
      'Produced weekly social media graphics and animated posts for 8 client brands',
      'Assisted art direction on editorial campaigns for regional lifestyle publications',
    ],
    tags: ['Illustrator', 'Photoshop', 'InDesign', 'After Effects'],
  },
]

const education = [
  {
    degree: 'BFA in Graphic Design',
    school: 'Pratt Institute',
    location: 'Brooklyn, NY',
    year: '2012 — 2016',
    note: 'Graduated Magna Cum Laude',
  },
  {
    degree: 'Motion Design Masterclass',
    school: 'School of Motion',
    location: 'Online',
    year: '2017',
    note: 'Cinema 4D & After Effects',
  },
  {
    degree: 'Brand Identity Design',
    school: 'Shillington School',
    location: 'New York, NY',
    year: '2019',
    note: 'Intensive programme',
  },
]

onMounted(() => {
  gsap.fromTo('.exp-header', { opacity: 0, y: 30 }, {
    opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
    scrollTrigger: { trigger: sectionRef.value, start: 'top 80%' },
  })
  gsap.fromTo('.job-card', { opacity: 0, y: 40 }, {
    opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.12,
    scrollTrigger: { trigger: '.exp-timeline', start: 'top 80%' },
  })
  gsap.fromTo('.edu-card', { opacity: 0, y: 30 }, {
    opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', stagger: 0.1,
    scrollTrigger: { trigger: '.edu-grid', start: 'top 85%' },
  })
})
</script>

<template>
  <section id="experience" ref="sectionRef" class="py-[120px] bg-bg-2 border-t border-border">
    <div class="max-w-[1200px] mx-auto px-8">

      <!-- Header -->
      <div class="exp-header flex flex-wrap items-end justify-between gap-8 mb-16">
        <div>
          <p class="section-label">Experience</p>
          <h2 class="font-syne font-extrabold" style="font-size:clamp(32px,4vw,52px)">
            8 years of craft and impact.
          </h2>
        </div>
        <div class="flex gap-6 flex-wrap">
          <div class="text-center">
            <p class="font-syne font-extrabold text-[32px] text-heading tracking-tightest leading-none">4</p>
            <p class="text-[12px] text-text-light uppercase tracking-wide05 font-medium mt-1">Studios</p>
          </div>
          <div class="w-px h-10 bg-border self-center"></div>
          <div class="text-center">
            <p class="font-syne font-extrabold text-[32px] text-heading tracking-tightest leading-none">8+</p>
            <p class="text-[12px] text-text-light uppercase tracking-wide05 font-medium mt-1">Years</p>
          </div>
          <div class="w-px h-10 bg-border self-center"></div>
          <div class="text-center">
            <p class="font-syne font-extrabold text-[32px] text-heading tracking-tightest leading-none">NY</p>
            <p class="text-[12px] text-text-light uppercase tracking-wide05 font-medium mt-1">Based</p>
          </div>
        </div>
      </div>

      <!-- Timeline -->
      <div class="exp-timeline flex flex-col gap-5 mb-20">
        <div
          v-for="(job, i) in jobs" :key="i"
          class="job-card group bg-bg-card border border-border rounded-2xl overflow-hidden hover:border-border-hover transition-all duration-300"
        >
          <!-- Top bar -->
          <div class="flex flex-wrap items-center justify-between gap-4 p-6 pb-0">
            <div class="flex items-center gap-4">
              <!-- Logo badge -->
              <div
                class="w-12 h-12 rounded-xl flex items-center justify-center font-syne font-extrabold text-[13px] text-bg flex-shrink-0"
                :style="{ background: job.color }"
              >{{ job.logo }}</div>

              <div>
                <h3 class="font-syne text-[20px] font-bold text-heading leading-tight">{{ job.role }}</h3>
                <div class="flex items-center gap-2 flex-wrap mt-0.5">
                  <span class="text-[14px] font-semibold" :style="{ color: job.color }">{{ job.company }}</span>
                  <span class="text-text-light text-[13px]">·</span>
                  <span class="text-text-light text-[13px]">{{ job.location }}</span>
                </div>
              </div>
            </div>

            <div class="flex flex-col items-end gap-1.5 flex-shrink-0">
              <span class="font-syne text-[13px] font-semibold text-heading tracking-[0.02em]">{{ job.period }}</span>
              <span class="text-[11px] font-semibold tracking-wide08 uppercase text-text-light bg-border px-2.5 py-1 rounded-full">{{ job.type }}</span>
            </div>
          </div>

          <!-- Body -->
          <div class="p-6 grid lg:grid-cols-[1fr_auto] gap-6 items-start">
            <div>
              <p class="text-[15px] text-text leading-[1.75] mb-5">{{ job.desc }}</p>

              <ul class="flex flex-col gap-2.5">
                <li
                  v-for="point in job.highlights" :key="point"
                  class="flex items-start gap-3 text-[14px] text-text leading-[1.6]"
                >
                  <span class="text-accent mt-[3px] flex-shrink-0 text-[10px]">▶</span>
                  {{ point }}
                </li>
              </ul>
            </div>

            <!-- Tags -->
            <div class="flex flex-wrap gap-2 lg:flex-col lg:items-end lg:gap-2 lg:min-w-[140px]">
              <span
                v-for="tag in job.tags" :key="tag"
                class="text-[11px] font-semibold px-3 py-1.5 rounded-full bg-bg-2 border border-border text-text-light tracking-[0.03em] whitespace-nowrap"
              >{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Education -->
      <div>
        <p class="text-[11px] font-semibold tracking-wide15 uppercase text-text-light mb-6">Education & Training</p>
        <div class="edu-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            v-for="edu in education" :key="edu.degree"
            class="edu-card bg-bg-card border border-border rounded-xl p-6 hover:border-border-hover transition-all"
          >
            <p class="font-syne text-[16px] font-bold text-heading mb-1">{{ edu.degree }}</p>
            <p class="text-[14px] font-semibold text-accent mb-0.5">{{ edu.school }}</p>
            <p class="text-[13px] text-text-light mb-3">{{ edu.location }}</p>
            <div class="flex items-center justify-between">
              <span class="text-[12px] font-semibold text-text-light border border-border rounded-full px-2.5 py-1">{{ edu.year }}</span>
              <span class="text-[12px] text-text italic">{{ edu.note }}</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
