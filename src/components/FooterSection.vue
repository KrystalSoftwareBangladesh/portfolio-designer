<script setup>
const year = new Date().getFullYear()

const scrollToSection = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <footer class="footer">
    <div class="container footer-inner">
      <div class="footer-top">
        <div class="footer-brand">
          <span class="footer-logo">AM<span class="dot">.</span></span>
          <p class="footer-tagline">Crafting motion that moves people.</p>
        </div>
        <nav class="footer-nav">
          <div class="footer-col">
            <p class="footer-col-title">Navigate</p>
            <ul>
              <li><a href="#" @click.prevent="scrollToSection('hero')">Home</a></li>
              <li><a href="#" @click.prevent="scrollToSection('about')">About</a></li>
              <li><a href="#" @click.prevent="scrollToSection('work')">Work</a></li>
              <li><a href="#" @click.prevent="scrollToSection('services')">Services</a></li>
              <li><a href="#" @click.prevent="scrollToSection('contact')">Contact</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <p class="footer-col-title">Services</p>
            <ul>
              <li><a href="#" @click.prevent>Motion Graphics</a></li>
              <li><a href="#" @click.prevent>Brand Identity</a></li>
              <li><a href="#" @click.prevent>UI Animation</a></li>
              <li><a href="#" @click.prevent>3D Design</a></li>
              <li><a href="#" @click.prevent>Art Direction</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <p class="footer-col-title">Connect</p>
            <ul>
              <li><a href="#" @click.prevent>Behance</a></li>
              <li><a href="#" @click.prevent>Instagram</a></li>
              <li><a href="#" @click.prevent>LinkedIn</a></li>
              <li><a href="#" @click.prevent>Dribbble</a></li>
            </ul>
          </div>
        </nav>
      </div>

      <div class="footer-bottom">
        <p class="copyright">© {{ year }} Alex Morrow. All rights reserved.</p>
        <div class="footer-links">
          <a href="#" @click.prevent>Privacy Policy</a>
          <a href="#" @click.prevent>Terms</a>
        </div>
        <p class="footer-made">Built with Vue 3 & GSAP</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--bg-2);
  border-top: 1px solid var(--border);
  padding: 80px 0 40px;
}

.footer-inner {
  display: flex;
  flex-direction: column;
  gap: 64px;
}

.footer-top {
  display: flex;
  justify-content: space-between;
  gap: 64px;
  flex-wrap: wrap;
}

.footer-logo {
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  font-size: 32px;
  color: var(--heading);
  letter-spacing: -0.03em;
  display: block;
  margin-bottom: 12px;
}

.footer-logo .dot {
  color: var(--accent);
}

.footer-tagline {
  font-size: 14px;
  color: var(--text-light);
  max-width: 220px;
  line-height: 1.6;
}

.footer-nav {
  display: flex;
  gap: 64px;
  flex-wrap: wrap;
}

.footer-col-title {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text-light);
  margin-bottom: 20px;
}

.footer-col ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-col ul li a {
  font-size: 14px;
  color: var(--text);
  font-weight: 500;
  transition: color 0.2s;
}

.footer-col ul li a:hover {
  color: var(--heading);
}

.footer-bottom {
  border-top: 1px solid var(--border);
  padding-top: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
}

.copyright {
  font-size: 13px;
  color: var(--text-light);
}

.footer-links {
  display: flex;
  gap: 24px;
}

.footer-links a {
  font-size: 13px;
  color: var(--text-light);
  transition: color 0.2s;
}

.footer-links a:hover {
  color: var(--heading);
}

.footer-made {
  font-size: 12px;
  color: var(--text-light);
}

@media (max-width: 768px) {
  .footer {
    padding: 60px 0 32px;
  }
  .footer-top {
    flex-direction: column;
    gap: 40px;
  }
  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
}
</style>
