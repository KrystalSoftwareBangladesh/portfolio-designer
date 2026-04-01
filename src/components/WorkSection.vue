<script setup>
import { ref, computed, onMounted, nextTick, watch } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref(null)
const activeFilter = ref('All')
const filters = ['All', 'Motion', 'Branding', '3D', 'UI/UX']
const selectedProject = ref(null)
const overlayRef = ref(null)

const projects = [
  {
    id: 1,
    title: 'Neon Dreams',
    category: 'Motion',
    type: 'Motion Graphics',
    year: '2024',
    company: 'Phantom Studio',
    role: 'Lead Motion Designer',
    duration: '6 weeks',
    client: 'Independent Film / Sundance submission',
    desc: 'A cinematic title sequence for an independent sci-fi short film with neon-lit typography and particle effects.',
    challenge: 'The director needed a title sequence that set the tone for a dystopian future — gritty, electric, and haunting — without a large VFX budget. The typography had to feel alive while remaining fully legible.',
    approach: 'I built a layered system in Cinema 4D using particle emission driven by spline paths, then composited everything in After Effects using additive blending modes and heavy chromatic aberration. Each frame was treated like a still painting before animation was applied.',
    outcome: 'The sequence premiered at Sundance and earned the film its distribution deal. The director described it as "the emotional hook the film needed before a single line of dialogue." It has since been featured in two motion design publications.',
    deliverables: ['Title sequence (2 min 40 sec)', 'Lower-third toolkit', 'Poster motion loop', 'Social teaser cuts (3×)'],
    tags: ['After Effects', 'Cinema 4D'],
    featured: true,
    color: '#c8f542',
    bg: 'linear-gradient(135deg,#1a1a2e,#16213e 50%,#0f3460)',
    pattern: 'M 0 80 Q 50 0 100 80 T 200 80',
  },
  {
    id: 2,
    title: 'Forma Studio',
    category: 'Branding',
    type: 'Brand Identity',
    year: '2024',
    company: 'Phantom Studio',
    role: 'Brand Designer',
    duration: '10 weeks',
    client: 'Forma — Barcelona Architecture Firm',
    desc: 'Complete visual identity for a Barcelona-based architecture firm — logo, palette, and animated brand assets.',
    challenge: 'Forma wanted a brand that felt as precise and considered as their buildings — minimal yet warm, modern yet lasting. Their previous identity was generic and failed to reflect the craftsmanship in their work.',
    approach: 'The identity is rooted in negative space and the geometry of architectural plans. The logotype uses a custom-drawn wordmark with letterforms whose apertures mirror the arches seen in Forma\'s most notable structures. A warm sand palette contrasts against deep charcoal to convey both elegance and solidity.',
    outcome: 'Forma relaunched with the new identity to immediate acclaim from their clientele. Their website conversion rate increased by 28% in the first month. The identity was shortlisted for a European Design Award 2024.',
    deliverables: ['Logo system (primary, secondary, marks)', 'Brand guidelines (48 pages)', 'Stationery suite', 'Animated logo sting', 'Social media templates'],
    tags: ['Figma', 'Illustrator'],
    featured: false,
    color: '#e8d5b7',
    bg: 'linear-gradient(135deg,#1a1200,#2d2000)',
    pattern: 'M 0 50 L 100 0 L 200 50 L 100 100 Z',
  },
  {
    id: 3,
    title: 'Orbit UI',
    category: 'UI/UX',
    type: 'UI Animation',
    year: '2023',
    company: 'Phantom Studio',
    role: 'Motion & UI Designer',
    duration: '8 weeks',
    client: 'Orbit — SaaS Analytics Platform',
    desc: 'Dashboard micro-interactions and transition design for a SaaS analytics platform.',
    challenge: 'Orbit\'s dashboard had powerful data but felt static and cold. Users reported feeling "lost" when navigating between views. The product team needed a motion language that aided orientation and made the data feel dynamic without being distracting.',
    approach: 'I defined a motion system built on three core principles: purposeful, snappy, and spatial. Every transition communicates hierarchy — drilling into data zooms in, going up zooms out. Micro-interactions on charts and cards use spring-based easing to feel physical and satisfying.',
    outcome: 'Post-launch user testing showed a 41% reduction in navigation-related support tickets. Time-on-dashboard increased by 22%. The motion system was documented into a Figma library now used across the full product team.',
    deliverables: ['Motion system guidelines', 'Figma interaction prototypes', 'Framer component library', 'Developer handoff specs'],
    tags: ['Figma', 'Framer'],
    featured: false,
    color: '#7dd3fc',
    bg: 'linear-gradient(135deg,#0c1a2e,#0f2a4a)',
    pattern: 'M 100 10 a 90 90 0 0 1 0 180 a 90 90 0 0 1 0 -180',
  },
  {
    id: 4,
    title: 'Lava Flow',
    category: '3D',
    type: '3D Animation',
    year: '2023',
    company: 'Flux Creative Agency',
    role: 'Senior 3D Animator',
    duration: '5 weeks',
    client: 'Volca — Luxury Cosmetics Brand',
    desc: 'Abstract fluid simulation rendered in Cinema 4D for a luxury cosmetics launch campaign.',
    challenge: 'Volca\'s new volcanic mineral skincare line needed launch visuals that felt primal and luxurious simultaneously. The brief called for "lava that looks like skin" — sensuous, slow, and otherworldly — with no product shots in the hero film.',
    approach: 'I used Cinema 4D\'s fluid simulation tools combined with custom displacement shaders to achieve organic movement that felt biological rather than mechanical. Redshift\'s subsurface scattering was pushed heavily to give the fluid a translucent, skin-like quality. The colour palette was developed in close collaboration with the brand team.',
    outcome: 'The hero film ran as a 30-second pre-roll on YouTube and Instagram, generating 18M views in the first two weeks. Volca reported a 340% increase in site traffic on launch day. The campaign was featured in Dezeen and Wallpaper*.',
    deliverables: ['Hero film (30 sec)', '15-sec cut-down', 'Looping campaign visuals (6×)', 'Static stills for print'],
    tags: ['Cinema 4D', 'Redshift'],
    featured: true,
    color: '#f97316',
    bg: 'linear-gradient(135deg,#1a0800,#2d1200)',
    pattern: 'M 0 100 C 50 0 150 200 200 100',
  },
  {
    id: 5,
    title: 'Pulse Brand',
    category: 'Branding',
    type: 'Brand Identity',
    year: '2023',
    company: 'Flux Creative Agency',
    role: 'Brand & Motion Designer',
    duration: '7 weeks',
    client: 'Pulse — Fitness Tech Startup',
    desc: 'Energetic visual identity for a fitness tech startup with animated logo and motion guidelines.',
    challenge: 'Pulse was entering a crowded fitness app market dominated by neon blues and aggressive blacks. They needed a brand bold enough to stand out but credible enough to attract serious athletes, not just casual gym-goers.',
    approach: 'The identity centres on a single bold symbol — a pulse waveform that doubles as a "P" monogram. The palette leans into an unexpected warm crimson over pure white, communicating intensity without aggression. The animated logo reacts to the user\'s actual heart rate data pulled from the app.',
    outcome: 'Pulse launched to 40,000 downloads in week one, exceeding projections by 3×. The brand was featured on Product Hunt\'s homepage and won a Webby Award for Best App Identity 2023.',
    deliverables: ['Logo system + animated variants', 'App icon suite', 'Brand guidelines', 'Motion principles doc', 'Lottie animation files'],
    tags: ['Illustrator', 'After Effects'],
    featured: false,
    color: '#f43f5e',
    bg: 'linear-gradient(135deg,#1a0010,#2d0020)',
    pattern: 'M 0 50 C 30 20 70 80 100 50 S 170 20 200 50',
  },
  {
    id: 6,
    title: 'Sky Atlas',
    category: 'Motion',
    type: 'Explainer Video',
    year: '2022',
    company: 'Flux Creative Agency',
    role: 'Director & Motion Designer',
    duration: '9 weeks',
    client: 'Sky Atlas — Space Data Startup',
    desc: '90-second animated explainer for a space data startup — designed for clarity and cinematic impact.',
    challenge: 'Sky Atlas maps satellite debris fields in real time — a genuinely complex concept to explain to non-technical investors and media in under 90 seconds. Previous attempts at explanation had relied on dense infographics that lost audiences within 15 seconds.',
    approach: 'I wrote the script alongside the creative director to find the human story at the core of the technology — debris fields as a threat to the future of space travel. The visual style draws from vintage NASA illustrations mixed with contemporary data visualisation, giving the film a timeless authority. Every data point shown is real.',
    outcome: 'The video anchored Sky Atlas\'s Series A fundraising deck, which closed at $12M — double their initial target. It has 900K views on YouTube and is used in the company\'s onboarding flow for enterprise clients.',
    deliverables: ['90-sec master film', '30-sec investor cut', 'Chapter stills for deck', 'Looping background visual'],
    tags: ['After Effects', 'Illustrator'],
    featured: false,
    color: '#a78bfa',
    bg: 'linear-gradient(135deg,#0d0a1a,#1a1030)',
    pattern: 'M 100 10 L 190 90 L 100 190 L 10 90 Z',
  },
]

const filtered = computed(() =>
  activeFilter.value === 'All' ? projects : projects.filter(p => p.category === activeFilter.value)
)

function openProject(project) {
  selectedProject.value = project
  document.body.style.overflow = 'hidden'
  nextTick(() => {
    gsap.fromTo(overlayRef.value,
      { opacity: 0 },
      { opacity: 1, duration: 0.3, ease: 'power2.out' }
    )
    gsap.fromTo('.detail-panel',
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out', delay: 0.05 }
    )
    gsap.fromTo('.detail-hero',
      { scale: 1.04 },
      { scale: 1, duration: 0.7, ease: 'power3.out', delay: 0.05 }
    )
    gsap.fromTo('.detail-content-item',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out', stagger: 0.07, delay: 0.2 }
    )
  })
}

function closeProject() {
  gsap.to(overlayRef.value, {
    opacity: 0, duration: 0.25, ease: 'power2.in',
    onComplete: () => {
      selectedProject.value = null
      document.body.style.overflow = ''
    }
  })
}

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
            'project-card bg-bg-card border border-border rounded-2xl overflow-hidden hover:border-border-hover hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col',
            project.featured ? 'lg:col-span-2' : '',
          ]"
          @click="openProject(project)"
        >
          <!-- Visual -->
          <div
            class="relative overflow-hidden flex-shrink-0"
            :class="project.featured ? 'h-[280px]' : 'h-[220px]'"
            :style="{ background: project.bg }"
          >
            <svg class="absolute inset-0 w-full h-full" viewBox="0 0 200 200" preserveAspectRatio="none">
              <path :d="project.pattern" fill="none" :stroke="project.color" stroke-width="1.5" opacity="0.5"/>
              <circle cx="100" cy="100" r="60" fill="none" :stroke="project.color" stroke-width="0.5" opacity="0.3"/>
              <circle cx="100" cy="100" r="30" fill="none" :stroke="project.color" stroke-width="0.8" opacity="0.4"/>
            </svg>
            <div class="absolute inset-0 p-5 flex flex-col justify-between">
              <div class="flex items-center justify-between">
                <span
                  class="text-[10px] font-bold tracking-wide15 uppercase px-2.5 py-1.5 rounded-full border backdrop-blur-sm"
                  :style="{ color: project.color, borderColor: project.color + '40', background: project.color + '18' }"
                >{{ project.category }}</span>
                <span class="font-syne text-[11px] font-bold tracking-wide15 uppercase text-white/50">{{ project.year }}</span>
              </div>
              <div class="flex gap-2 flex-wrap">
                <span
                  v-for="tag in project.tags" :key="tag"
                  class="text-[11px] font-semibold px-2.5 py-1.5 rounded-full bg-black/50 text-white/70 backdrop-blur-sm border border-white/10"
                >{{ tag }}</span>
              </div>
            </div>
          </div>

          <!-- Info -->
          <div class="p-6 flex flex-col flex-1">
            <div class="flex items-center justify-between gap-3 mb-2 flex-wrap">
              <p class="text-[11px] font-bold tracking-wide12 uppercase" :style="{ color: project.color }">{{ project.type }}</p>
              <span class="inline-flex items-center gap-1.5 text-[11px] font-semibold text-text-light bg-bg-2 border border-border rounded-full px-2.5 py-1">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <rect x="1" y="3" width="8" height="6" rx="1" stroke="currentColor" stroke-width="1"/>
                  <path d="M3 3V2a2 2 0 014 0v1" stroke="currentColor" stroke-width="1"/>
                </svg>
                {{ project.company }}
              </span>
            </div>
            <h3 class="font-syne text-[22px] font-extrabold text-heading mb-2.5">{{ project.title }}</h3>
            <p class="text-sm text-text leading-[1.7] mb-5 flex-1">{{ project.desc }}</p>
            <button
              class="inline-flex items-center gap-1.5 text-[13px] font-semibold text-heading tracking-[0.02em] hover:gap-2.5 hover:text-accent transition-all self-start mt-auto"
            >
              View Project
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- ─── Project Detail Overlay ─── -->
  <Teleport to="body">
    <div
      v-if="selectedProject"
      ref="overlayRef"
      class="fixed inset-0 z-[200] overflow-y-auto"
      style="background: rgba(4,4,4,0.92); backdrop-filter: blur(12px);"
    >
      <div class="detail-panel min-h-screen max-w-[920px] mx-auto px-6 py-10 md:py-16">

        <!-- Close + back row -->
        <div class="detail-content-item flex items-center justify-between mb-10">
          <button
            class="inline-flex items-center gap-2 text-[13px] font-semibold text-text-light hover:text-heading transition-colors"
            @click="closeProject"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M11 4L6 9l5 5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Back to Work
          </button>
          <button
            class="w-9 h-9 rounded-full border border-border flex items-center justify-center text-text-light hover:border-heading hover:text-heading transition-all"
            @click="closeProject"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
            </svg>
          </button>
        </div>

        <!-- Hero visual -->
        <div
          class="detail-hero detail-content-item relative rounded-2xl overflow-hidden mb-10"
          style="height: clamp(220px, 32vw, 380px);"
          :style="{ background: selectedProject.bg }"
        >
          <svg class="absolute inset-0 w-full h-full" viewBox="0 0 600 300" preserveAspectRatio="xMidYMid slice">
            <defs>
              <radialGradient id="rg" cx="50%" cy="50%" r="60%">
                <stop offset="0%" :stop-color="selectedProject.color" stop-opacity="0.15"/>
                <stop offset="100%" :stop-color="selectedProject.color" stop-opacity="0"/>
              </radialGradient>
            </defs>
            <rect width="600" height="300" fill="url(#rg)"/>
            <circle cx="300" cy="150" r="180" fill="none" :stroke="selectedProject.color" stroke-width="0.6" opacity="0.25"/>
            <circle cx="300" cy="150" r="100" fill="none" :stroke="selectedProject.color" stroke-width="1" opacity="0.35"/>
            <circle cx="300" cy="150" r="40"  fill="none" :stroke="selectedProject.color" stroke-width="1.5" opacity="0.5"/>
            <path :d="selectedProject.pattern" fill="none" :stroke="selectedProject.color" stroke-width="2" opacity="0.4"
              transform="translate(200,50) scale(1.5)"/>
          </svg>
          <!-- Overlay gradient for readability -->
          <div class="absolute inset-0" style="background: linear-gradient(to top, rgba(8,8,8,0.6) 0%, transparent 60%)"></div>
          <!-- Category + year in hero -->
          <div class="absolute top-5 left-5 right-5 flex items-center justify-between">
            <span
              class="text-[11px] font-bold tracking-wide12 uppercase px-3 py-1.5 rounded-full border backdrop-blur-sm"
              :style="{ color: selectedProject.color, borderColor: selectedProject.color + '50', background: selectedProject.color + '20' }"
            >{{ selectedProject.category }}</span>
            <span class="font-syne font-bold text-[12px] tracking-wide15 uppercase text-white/50">{{ selectedProject.year }}</span>
          </div>
          <!-- Title inside hero bottom -->
          <div class="absolute bottom-5 left-6">
            <p class="text-[12px] font-semibold tracking-wide08 uppercase mb-1" :style="{ color: selectedProject.color }">{{ selectedProject.type }}</p>
            <h1 class="font-syne font-extrabold text-heading" style="font-size: clamp(28px, 4.5vw, 52px); line-height: 1.1;">
              {{ selectedProject.title }}
            </h1>
          </div>
        </div>

        <!-- Meta strip -->
        <div class="detail-content-item grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 p-5 bg-bg-card border border-border rounded-xl">
          <div>
            <p class="text-[10px] font-bold tracking-wide15 uppercase text-text-light mb-1.5">Company</p>
            <p class="font-syne text-[14px] font-bold text-heading">{{ selectedProject.company }}</p>
          </div>
          <div>
            <p class="text-[10px] font-bold tracking-wide15 uppercase text-text-light mb-1.5">Role</p>
            <p class="font-syne text-[14px] font-bold text-heading">{{ selectedProject.role }}</p>
          </div>
          <div>
            <p class="text-[10px] font-bold tracking-wide15 uppercase text-text-light mb-1.5">Client</p>
            <p class="font-syne text-[14px] font-bold text-heading">{{ selectedProject.client }}</p>
          </div>
          <div>
            <p class="text-[10px] font-bold tracking-wide15 uppercase text-text-light mb-1.5">Duration</p>
            <p class="font-syne text-[14px] font-bold text-heading">{{ selectedProject.duration }}</p>
          </div>
        </div>

        <!-- Body: 2-col layout on md+ -->
        <div class="grid md:grid-cols-[1fr_280px] gap-8">

          <!-- Left: narrative -->
          <div class="flex flex-col gap-8">

            <!-- Overview -->
            <div class="detail-content-item">
              <p class="text-[10px] font-bold tracking-wide15 uppercase text-text-light mb-3">Overview</p>
              <p class="text-[16px] text-text leading-[1.8]">{{ selectedProject.desc }}</p>
            </div>

            <!-- Challenge -->
            <div class="detail-content-item p-6 rounded-xl bg-bg-card border border-border">
              <div class="flex items-center gap-3 mb-4">
                <span class="w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-bold text-bg" :style="{ background: selectedProject.color }">01</span>
                <p class="text-[11px] font-bold tracking-wide15 uppercase text-text-light">The Challenge</p>
              </div>
              <p class="text-[15px] text-text leading-[1.8]">{{ selectedProject.challenge }}</p>
            </div>

            <!-- Approach -->
            <div class="detail-content-item p-6 rounded-xl bg-bg-card border border-border">
              <div class="flex items-center gap-3 mb-4">
                <span class="w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-bold text-bg" :style="{ background: selectedProject.color }">02</span>
                <p class="text-[11px] font-bold tracking-wide15 uppercase text-text-light">The Approach</p>
              </div>
              <p class="text-[15px] text-text leading-[1.8]">{{ selectedProject.approach }}</p>
            </div>

            <!-- Outcome -->
            <div class="detail-content-item p-6 rounded-xl border" :style="{ borderColor: selectedProject.color + '40', background: selectedProject.color + '08' }">
              <div class="flex items-center gap-3 mb-4">
                <span class="w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-bold text-bg" :style="{ background: selectedProject.color }">03</span>
                <p class="text-[11px] font-bold tracking-wide15 uppercase" :style="{ color: selectedProject.color }">The Outcome</p>
              </div>
              <p class="text-[15px] text-text leading-[1.8]">{{ selectedProject.outcome }}</p>
            </div>

          </div>

          <!-- Right: sidebar -->
          <div class="flex flex-col gap-6">

            <!-- Tools -->
            <div class="detail-content-item p-5 bg-bg-card border border-border rounded-xl">
              <p class="text-[10px] font-bold tracking-wide15 uppercase text-text-light mb-4">Tools Used</p>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in selectedProject.tags" :key="tag"
                  class="text-[12px] font-semibold px-3 py-1.5 rounded-full bg-bg-2 border border-border text-text-light"
                >{{ tag }}</span>
              </div>
            </div>

            <!-- Deliverables -->
            <div class="detail-content-item p-5 bg-bg-card border border-border rounded-xl">
              <p class="text-[10px] font-bold tracking-wide15 uppercase text-text-light mb-4">Deliverables</p>
              <ul class="flex flex-col gap-2.5">
                <li
                  v-for="item in selectedProject.deliverables" :key="item"
                  class="flex items-start gap-2.5 text-[13px] text-text leading-[1.5]"
                >
                  <span class="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-[5px]" :style="{ background: selectedProject.color }"></span>
                  {{ item }}
                </li>
              </ul>
            </div>

            <!-- CTA -->
            <div class="detail-content-item p-5 rounded-xl border" :style="{ borderColor: selectedProject.color + '40' }">
              <p class="font-syne font-bold text-heading text-[15px] mb-2">Interested in similar work?</p>
              <p class="text-[13px] text-text-light mb-4 leading-[1.6]">Let's talk about what we can build together.</p>
              <button
                class="w-full py-2.5 rounded-full text-[13px] font-bold text-bg tracking-[0.03em] transition-opacity hover:opacity-90"
                :style="{ background: selectedProject.color }"
                @click="closeProject(); document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })"
              >
                Get In Touch
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  </Teleport>
</template>
