<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'

const roles = ['Motion Graphics', 'Visual Identity', 'Brand Design', 'Animation', 'Art Direction']

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

  tl.fromTo('.hero-eyebrow', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 })
    .fromTo('.hero-line', { opacity: 0, y: 60, skewY: 3 }, { opacity: 1, y: 0, skewY: 0, duration: 1, stagger: 0.12 }, '-=0.4')
    .fromTo('.hero-subtitle', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.5')
    .fromTo('.hero-cta-item', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 }, '-=0.5')
    .fromTo('.hero-stats', { opacity: 0 }, { opacity: 1, duration: 0.8 }, '-=0.3')
})
</script>

<template>
  <section
    id="hero"
    class="relative min-h-screen flex flex-col justify-center pt-[100px] overflow-hidden"
  >
    <!-- Background glow -->
    <div
      class="absolute -top-52 -right-52 w-[700px] h-[700px] rounded-full pointer-events-none"
      style="background: radial-gradient(circle, rgba(200,245,66,0.06) 0%, transparent 70%)"
    ></div>

    <!-- Main content -->
    <div class="max-w-[1200px] mx-auto px-8 w-full grid lg:grid-cols-2 gap-20 items-center pt-10 pb-24">
      <!-- Left col -->
      <div>
        <p class="hero-eyebrow section-label">Graphics & Motion Designer</p>

        <h1 class="font-syne font-extrabold mb-7 flex flex-col" style="font-size: clamp(52px,7vw,96px)">
          <span class="hero-line block">Crafting</span>
          <span class="hero-line block text-accent">Visual Stories</span>
          <span class="hero-line block">in Motion.</span>
        </h1>

        <p class="hero-subtitle text-[17px] leading-[1.75] text-text max-w-[440px] mb-11">
          I'm Alex Morrow — a designer obsessed with bold aesthetics, kinetic typography,
          and motion that moves people. Based in New York, working worldwide.
        </p>

        <div class="flex flex-wrap gap-4 mb-14">
          <a
            class="hero-cta-item inline-flex items-center gap-2 bg-accent text-bg font-semibold text-[15px] px-7 py-3.5 rounded-full hover:bg-accent-dark hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(200,245,66,0.2)] transition-all"
            href="#"
            @click.prevent="document.getElementById('work')?.scrollIntoView({behavior:'smooth'})"
          >
            View My Work
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
          <a
            class="hero-cta-item inline-flex items-center font-medium text-[15px] text-heading px-7 py-3.5 rounded-full border border-border-hover hover:border-text transition-all"
            href="#"
            @click.prevent="document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})"
          >
            Get in Touch
          </a>
        </div>

        <div class="hero-stats flex flex-wrap gap-6 items-center">
          <div class="flex flex-col gap-1">
            <span class="font-syne text-[28px] font-extrabold text-heading tracking-tightest">8+</span>
            <span class="text-[12px] text-text-light uppercase tracking-wide05 font-medium">Years Experience</span>
          </div>
          <div class="w-px h-10 bg-border"></div>
          <div class="flex flex-col gap-1">
            <span class="font-syne text-[28px] font-extrabold text-heading tracking-tightest">120+</span>
            <span class="text-[12px] text-text-light uppercase tracking-wide05 font-medium">Projects Delivered</span>
          </div>
          <div class="w-px h-10 bg-border"></div>
          <div class="flex flex-col gap-1">
            <span class="font-syne text-[28px] font-extrabold text-heading tracking-tightest">40+</span>
            <span class="text-[12px] text-text-light uppercase tracking-wide05 font-medium">Clients Worldwide</span>
          </div>
        </div>
      </div>

      <!-- Right col — visual -->
      <div class="relative hidden lg:flex items-center justify-center h-[480px]">
        <!-- Rotating rings -->
        <div class="absolute w-[340px] h-[340px] rounded-full border border-accent/10 animate-spin20"></div>
        <div class="absolute w-[240px] h-[240px] rounded-full border border-accent/[0.15] animate-spin15r"></div>
        <div class="absolute w-[140px] h-[140px] rounded-full border border-accent/20 animate-spin10"></div>

        <!-- Center play icon -->
        <div class="relative z-10">
          <svg class="animate-pulse2" width="48" height="48" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="23.5" stroke="#c8f542" stroke-opacity="0.3"/>
            <path d="M19 16l14 8-14 8V16z" fill="#c8f542"/>
          </svg>
        </div>

        <!-- Floating tool tags -->
        <div
          class="absolute bg-bg-card border border-border text-text text-xs font-semibold tracking-wide05 px-3.5 py-2 rounded-full animate-float6"
          style="top:20%;right:10%"
        >After Effects</div>
        <div
          class="absolute bg-bg-card border border-border text-text text-xs font-semibold tracking-wide05 px-3.5 py-2 rounded-full"
          style="bottom:30%;left:5%;animation:float 7s ease-in-out infinite;animation-delay:-2s"
        >Cinema 4D</div>
        <div
          class="absolute bg-bg-card border border-border text-text text-xs font-semibold tracking-wide05 px-3.5 py-2 rounded-full"
          style="bottom:15%;right:20%;animation:float 5.5s ease-in-out infinite;animation-delay:-4s"
        >Figma</div>
      </div>
    </div>

    <!-- Marquee -->
    <div class="w-full overflow-hidden border-t border-b border-border bg-bg-2 py-4">
      <div
        class="flex whitespace-nowrap w-max animate-marquee"
      >
        <span
          v-for="(role, i) in [...roles, ...roles, ...roles, ...roles]"
          :key="i"
          class="font-syne text-[14px] font-semibold tracking-wide1 uppercase text-text-light px-8 hover:text-accent transition-colors"
        >
          {{ role }} <span class="text-accent ml-8">✦</span>
        </span>
      </div>
    </div>

    <!-- Scroll hint -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-light text-[11px] tracking-wide15 uppercase font-medium">
      <div class="w-px h-10 bg-gradient-to-b from-transparent to-text-light animate-scrollDown"></div>
      <span>Scroll</span>
    </div>
  </section>
</template>

<style>
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
</style>
