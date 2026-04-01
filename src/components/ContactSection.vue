<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref(null)

const form = ref({
  name: '',
  email: '',
  budget: '',
  message: '',
})

const submitted = ref(false)
const submitting = ref(false)

const budgets = ['< $2,000', '$2,000 – $5,000', '$5,000 – $15,000', '$15,000+', 'Let\'s discuss']

const handleSubmit = () => {
  submitting.value = true
  setTimeout(() => {
    submitting.value = false
    submitted.value = true
    form.value = { name: '', email: '', budget: '', message: '' }
  }, 1500)
}

onMounted(() => {
  gsap.fromTo('.contact-left', { opacity: 0, x: -40 }, {
    opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
    scrollTrigger: { trigger: sectionRef.value, start: 'top 75%' }
  })
  gsap.fromTo('.contact-right', { opacity: 0, x: 40 }, {
    opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
    scrollTrigger: { trigger: sectionRef.value, start: 'top 75%' }
  })
})
</script>

<template>
  <section id="contact" ref="sectionRef" class="contact-section">
    <div class="container">
      <div class="contact-grid">
        <div class="contact-left">
          <p class="section-label">Get In Touch</p>
          <h2 class="contact-title">Ready to create something remarkable?</h2>
          <p class="contact-desc">
            Whether you have a clear brief or just a spark of an idea — let's talk.
            I take on a limited number of projects each quarter to ensure quality.
          </p>

          <div class="contact-info">
            <a href="mailto:hello@alexmorrow.design" class="info-link">
              <span class="info-icon">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M2 4h14v10H2V4z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
                  <path d="M2 4l7 6 7-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
              hello@alexmorrow.design
            </a>
            <a href="tel:+12125550100" class="info-link">
              <span class="info-icon">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 3h3.5l1.5 4-2 1.2a10 10 0 004.8 4.8L12 11l4 1.5V16a1.5 1.5 0 01-1.5 1.5A14.5 14.5 0 011.5 3 1.5 1.5 0 013 3z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
                </svg>
              </span>
              +1 (212) 555-0100
            </a>
          </div>

          <div class="availability">
            <span class="avail-dot"></span>
            <span>Available for new projects — Q3 2025</span>
          </div>

          <div class="social-links">
            <a href="#" class="social-link" title="Behance" @click.prevent>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.5 11.5c1.38 0 2.5-1.12 2.5-2.5S8.88 6.5 7.5 6.5H2v10h6c1.66 0 3-1.34 3-3 0-1.31-.84-2.42-2-2.85zM4 8.5h3c.83 0 1.5.67 1.5 1.5S7.83 11.5 7 11.5H4V8.5zm3.5 6H4v-2.5h3.5c.69 0 1.25.56 1.25 1.25S8.19 14.5 7.5 14.5zM15.5 7h5v1.5h-5V7zm2.75 8.5c-.92 0-1.64-.52-1.9-1.25H21c.03-.25.05-.5.05-.75 0-2.07-1.68-3.75-3.75-3.75-2.07 0-3.75 1.68-3.75 3.75 0 2.07 1.68 3.75 3.75 3.75 1.4 0 2.62-.77 3.27-1.9l-1.6-.85c-.33.52-.9.87-1.55.87zM17.3 12c.84 0 1.54.52 1.8 1.25h-3.6c.26-.73.96-1.25 1.8-1.25z"/>
              </svg>
            </a>
            <a href="#" class="social-link" title="Instagram" @click.prevent>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <circle cx="12" cy="12" r="5"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            <a href="#" class="social-link" title="LinkedIn" @click.prevent>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a href="#" class="social-link" title="Dribbble" @click.prevent>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <circle cx="12" cy="12" r="10"/>
                <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"/>
              </svg>
            </a>
          </div>
        </div>

        <div class="contact-right">
          <div class="form-card">
            <div v-if="submitted" class="success-state">
              <div class="success-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="19" stroke="var(--accent)" stroke-width="1.5"/>
                  <path d="M12 20l6 6 10-12" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h3>Message sent!</h3>
              <p>Thanks for reaching out. I'll get back to you within 24–48 hours.</p>
              <button class="reset-btn" @click="submitted = false">Send another</button>
            </div>

            <form v-else @submit.prevent="handleSubmit" class="contact-form">
              <div class="form-row">
                <div class="form-group">
                  <label for="name">Your Name</label>
                  <input id="name" v-model="form.name" type="text" placeholder="Jane Smith" required />
                </div>
                <div class="form-group">
                  <label for="email">Email Address</label>
                  <input id="email" v-model="form.email" type="email" placeholder="jane@company.com" required />
                </div>
              </div>

              <div class="form-group">
                <label>Project Budget</label>
                <div class="budget-grid">
                  <label
                    v-for="budget in budgets"
                    :key="budget"
                    :class="['budget-option', { selected: form.budget === budget }]"
                  >
                    <input type="radio" :value="budget" v-model="form.budget" style="display:none" />
                    {{ budget }}
                  </label>
                </div>
              </div>

              <div class="form-group">
                <label for="message">Tell me about your project</label>
                <textarea id="message" v-model="form.message" rows="5" placeholder="Describe your project, goals, timeline..." required></textarea>
              </div>

              <button type="submit" class="submit-btn" :disabled="submitting">
                <span v-if="submitting">Sending...</span>
                <span v-else>
                  Send Message
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  padding: 120px 0;
  border-top: 1px solid var(--border);
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;
}

.contact-title {
  font-size: clamp(28px, 3.5vw, 44px);
  font-weight: 800;
  margin-bottom: 20px;
  line-height: 1.1;
}

.contact-desc {
  font-size: 16px;
  line-height: 1.8;
  color: var(--text);
  margin-bottom: 40px;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
}

.info-link {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 15px;
  color: var(--heading);
  font-weight: 500;
  transition: color 0.2s;
}

.info-link:hover {
  color: var(--accent);
}

.info-icon {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  flex-shrink: 0;
}

.availability {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 32px;
  letter-spacing: 0.02em;
}

.avail-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent);
  flex-shrink: 0;
  box-shadow: 0 0 0 3px rgba(200, 245, 66, 0.2);
  animation: ping 2s ease-in-out infinite;
}

@keyframes ping {
  0%, 100% { box-shadow: 0 0 0 3px rgba(200, 245, 66, 0.2); }
  50% { box-shadow: 0 0 0 6px rgba(200, 245, 66, 0.1); }
}

.social-links {
  display: flex;
  gap: 12px;
}

.social-link {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text);
  transition: border-color 0.2s, color 0.2s, transform 0.2s;
}

.social-link:hover {
  border-color: var(--accent);
  color: var(--accent);
  transform: translateY(-2px);
}

.form-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 40px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-light);
}

.form-group input,
.form-group textarea {
  background: var(--bg-2);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 12px 16px;
  font-size: 15px;
  color: var(--heading);
  font-family: inherit;
  transition: border-color 0.2s;
  resize: none;
  outline: none;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: var(--text-light);
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: var(--accent);
}

.budget-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
}

.budget-option {
  font-size: 12px;
  font-weight: 600;
  padding: 10px 8px;
  border-radius: 8px;
  border: 1px solid var(--border);
  text-align: center;
  cursor: pointer;
  color: var(--text);
  transition: all 0.2s;
  user-select: none;
  letter-spacing: 0.02em;
}

.budget-option:hover {
  border-color: var(--border-hover);
  color: var(--heading);
}

.budget-option.selected {
  background: rgba(200, 245, 66, 0.1);
  border-color: var(--accent);
  color: var(--accent);
}

.submit-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: var(--accent);
  color: var(--bg);
  font-weight: 700;
  font-size: 15px;
  padding: 16px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
}

.submit-btn:hover:not(:disabled) {
  background: var(--accent-dark);
  transform: translateY(-1px);
  box-shadow: 0 8px 24px rgba(200, 245, 66, 0.2);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.success-state {
  text-align: center;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.success-icon {
  margin-bottom: 8px;
}

.success-state h3 {
  font-size: 24px;
  font-weight: 800;
}

.success-state p {
  color: var(--text);
  font-size: 15px;
}

.reset-btn {
  margin-top: 8px;
  font-size: 14px;
  font-weight: 600;
  color: var(--accent);
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  transition: opacity 0.2s;
}

.reset-btn:hover {
  opacity: 0.7;
}

@media (max-width: 1024px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 56px;
  }
}

@media (max-width: 640px) {
  .contact-section {
    padding: 80px 0;
  }
  .form-card {
    padding: 28px 20px;
  }
  .form-row {
    grid-template-columns: 1fr;
  }
  .budget-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
