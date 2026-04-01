<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const menuOpen = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 60
}

const scrollToSection = (id) => {
  menuOpen.value = false
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-[400ms]',
      scrolled
        ? 'bg-bg/[0.92] backdrop-blur-lg py-4 border-b border-border'
        : 'py-6',
    ]"
  >
    <div class="max-w-[1200px] mx-auto px-8 flex items-center gap-10">
      <!-- Logo -->
      <a
        class="font-syne font-extrabold text-[22px] text-heading mr-auto tracking-tightest"
        href="#"
        @click.prevent="scrollToSection('hero')"
      >
        AM<span class="text-accent">.</span>
      </a>

      <!-- Nav links — desktop + mobile overlay -->
      <ul
        :class="menuOpen
          ? 'flex flex-col items-center justify-center gap-10 fixed inset-0 bg-bg z-40 list-none'
          : 'hidden md:flex list-none gap-9'"
      >
        <li v-for="link in [['about','About'],['work','Work'],['services','Services'],['contact','Contact']]" :key="link[0]">
          <a
            :class="menuOpen
              ? 'font-syne font-bold text-[28px] text-heading'
              : 'text-sm font-medium text-text tracking-[0.02em] hover:text-heading transition-colors'"
            href="#"
            @click.prevent="scrollToSection(link[0])"
          >{{ link[1] }}</a>
        </li>
      </ul>

      <!-- CTA — desktop only -->
      <a
        class="hidden md:inline-flex text-[13px] font-semibold tracking-wide05 text-bg bg-accent px-[22px] py-[10px] rounded-full hover:bg-accent-dark hover:-translate-y-px transition-all"
        href="#"
        @click.prevent="scrollToSection('contact')"
      >
        Let's Talk
      </a>

      <!-- Hamburger -->
      <button
        class="flex md:hidden flex-col gap-[5px] p-1 relative z-50"
        :aria-expanded="menuOpen"
        aria-label="Toggle menu"
        @click="menuOpen = !menuOpen"
      >
        <span
          :class="['block w-[22px] h-[2px] bg-heading rounded-sm transition-all duration-300', menuOpen ? 'translate-y-[7px] rotate-45' : '']"
        ></span>
        <span
          :class="['block w-[22px] h-[2px] bg-heading rounded-sm transition-all duration-300', menuOpen ? 'opacity-0' : '']"
        ></span>
        <span
          :class="['block w-[22px] h-[2px] bg-heading rounded-sm transition-all duration-300', menuOpen ? '-translate-y-[7px] -rotate-45' : '']"
        ></span>
      </button>
    </div>
  </nav>
</template>
