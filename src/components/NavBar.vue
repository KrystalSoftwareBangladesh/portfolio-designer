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
  <nav :class="['navbar', { scrolled }]">
    <div class="container nav-inner">
      <a class="logo" href="#" @click.prevent="scrollToSection('hero')">
        AM<span class="dot">.</span>
      </a>

      <ul class="nav-links" :class="{ open: menuOpen }">
        <li><a href="#" @click.prevent="scrollToSection('about')">About</a></li>
        <li><a href="#" @click.prevent="scrollToSection('work')">Work</a></li>
        <li><a href="#" @click.prevent="scrollToSection('services')">Services</a></li>
        <li><a href="#" @click.prevent="scrollToSection('contact')">Contact</a></li>
      </ul>

      <a class="cta-btn" href="#" @click.prevent="scrollToSection('contact')">
        Let's Talk
      </a>

      <button class="hamburger" :class="{ open: menuOpen }" @click="menuOpen = !menuOpen" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 24px 0;
  transition: all 0.4s ease;
}

.navbar.scrolled {
  background: rgba(8, 8, 8, 0.92);
  backdrop-filter: blur(16px);
  padding: 16px 0;
  border-bottom: 1px solid var(--border);
}

.nav-inner {
  display: flex;
  align-items: center;
  gap: 40px;
}

.logo {
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  font-size: 22px;
  color: var(--heading);
  margin-right: auto;
  letter-spacing: -0.03em;
}

.logo .dot {
  color: var(--accent);
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 36px;
}

.nav-links a {
  font-size: 14px;
  font-weight: 500;
  color: var(--text);
  letter-spacing: 0.02em;
  transition: color 0.2s;
}

.nav-links a:hover {
  color: var(--heading);
}

.cta-btn {
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: var(--bg);
  background: var(--accent);
  padding: 10px 22px;
  border-radius: 100px;
  transition: background 0.2s, transform 0.2s;
}

.cta-btn:hover {
  background: var(--accent-dark);
  transform: translateY(-1px);
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 4px;
}

.hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--heading);
  border-radius: 2px;
  transition: all 0.3s;
}

.hamburger.open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.hamburger.open span:nth-child(2) {
  opacity: 0;
}
.hamburger.open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }
  .cta-btn {
    display: none;
  }
  .nav-links {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--bg);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    opacity: 0;
    pointer-events: none;
    transform: translateY(-20px);
    transition: all 0.4s ease;
    z-index: -1;
  }
  .nav-links.open {
    opacity: 1;
    pointer-events: all;
    transform: translateY(0);
  }
  .nav-links a {
    font-size: 28px;
    font-family: 'Syne', sans-serif;
    font-weight: 700;
    color: var(--heading);
  }
}
</style>
