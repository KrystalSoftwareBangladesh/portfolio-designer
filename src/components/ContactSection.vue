<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref(null)
const form = ref({ name: '', email: '', budget: '', message: '' })
const submitted = ref(false)
const submitting = ref(false)

const budgets = ["< $2,000", "$2,000 – $5,000", "$5,000 – $15,000", "$15,000+", "Let's discuss"]

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
  <section id="contact" ref="sectionRef" class="py-[120px] border-t border-border">
    <div class="max-w-[1200px] mx-auto px-8">
      <div class="grid lg:grid-cols-2 gap-20 items-start">

        <!-- Left info -->
        <div class="contact-left">
          <p class="section-label">Get In Touch</p>
          <h2 class="font-syne font-extrabold mb-5 leading-[1.1]" style="font-size:clamp(28px,3.5vw,44px)">
            Ready to create something remarkable?
          </h2>
          <p class="text-base text-text leading-[1.8] mb-10">
            Whether you have a clear brief or just a spark of an idea — let's talk.
            I take on a limited number of projects each quarter to ensure quality.
          </p>

          <div class="flex flex-col gap-4 mb-8">
            <a class="flex items-center gap-3 text-[15px] text-heading font-medium hover:text-accent transition-colors" href="mailto:hello@alexmorrow.design">
              <span class="w-9 h-9 rounded-lg bg-bg-card border border-border flex items-center justify-center text-accent flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M2 4h14v10H2V4z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M2 4l7 6 7-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </span>
              hello@alexmorrow.design
            </a>
            <a class="flex items-center gap-3 text-[15px] text-heading font-medium hover:text-accent transition-colors" href="tel:+12125550100">
              <span class="w-9 h-9 rounded-lg bg-bg-card border border-border flex items-center justify-center text-accent flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 3h3.5l1.5 4-2 1.2a10 10 0 004.8 4.8L12 11l4 1.5V16a1.5 1.5 0 01-1.5 1.5A14.5 14.5 0 011.5 3 1.5 1.5 0 013 3z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>
              </span>
              +1 (212) 555-0100
            </a>
          </div>

          <div class="flex items-center gap-2.5 text-[13px] font-semibold text-text tracking-[0.02em] mb-8">
            <span class="w-2 h-2 rounded-full bg-accent flex-shrink-0 animate-ping2"></span>
            Available for new projects — Q3 2025
          </div>

          <div class="flex gap-3">
            <a v-for="(social, i) in ['Behance','Instagram','LinkedIn','Dribbble']" :key="i"
              class="w-10 h-10 rounded-[10px] bg-bg-card border border-border flex items-center justify-center text-text hover:border-accent hover:text-accent hover:-translate-y-0.5 transition-all"
              href="#" :title="social" @click.prevent
            >
              <svg v-if="i===0" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M7.5 11.5c1.38 0 2.5-1.12 2.5-2.5S8.88 6.5 7.5 6.5H2v10h6c1.66 0 3-1.34 3-3 0-1.31-.84-2.42-2-2.85zM4 8.5h3c.83 0 1.5.67 1.5 1.5S7.83 11.5 7 11.5H4V8.5zm3.5 6H4v-2.5h3.5c.69 0 1.25.56 1.25 1.25S8.19 14.5 7.5 14.5zM15.5 7h5v1.5h-5V7zm2.75 8.5c-.92 0-1.64-.52-1.9-1.25H21c.03-.25.05-.5.05-.75 0-2.07-1.68-3.75-3.75-3.75-2.07 0-3.75 1.68-3.75 3.75 0 2.07 1.68 3.75 3.75 3.75 1.4 0 2.62-.77 3.27-1.9l-1.6-.85c-.33.52-.9.87-1.55.87zM17.3 12c.84 0 1.54.52 1.8 1.25h-3.6c.26-.73.96-1.25 1.8-1.25z"/></svg>
              <svg v-else-if="i===1" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
              <svg v-else-if="i===2" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
              <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"/></svg>
            </a>
          </div>
        </div>

        <!-- Right form -->
        <div class="contact-right">
          <div class="bg-bg-card border border-border rounded-[20px] p-10">

            <!-- Success state -->
            <div v-if="submitted" class="text-center py-10 flex flex-col items-center gap-4">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="19" stroke="#c8f542" stroke-width="1.5"/>
                <path d="M12 20l6 6 10-12" stroke="#c8f542" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <h3 class="font-syne text-[24px] font-extrabold text-heading">Message sent!</h3>
              <p class="text-[15px] text-text">Thanks for reaching out. I'll get back to you within 24–48 hours.</p>
              <button class="mt-2 text-sm font-semibold text-accent hover:opacity-70 transition-opacity" @click="submitted = false">
                Send another
              </button>
            </div>

            <!-- Form -->
            <form v-else class="flex flex-col gap-6" @submit.prevent="handleSubmit">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="flex flex-col gap-2">
                  <label class="text-[11px] font-semibold tracking-wide08 uppercase text-text-light" for="name">Your Name</label>
                  <input
                    id="name" v-model="form.name" type="text" placeholder="Jane Smith" required
                    class="bg-bg-2 border border-border rounded-[10px] px-4 py-3 text-[15px] text-heading placeholder:text-text-light focus:border-accent outline-none transition-colors"
                  />
                </div>
                <div class="flex flex-col gap-2">
                  <label class="text-[11px] font-semibold tracking-wide08 uppercase text-text-light" for="email">Email Address</label>
                  <input
                    id="email" v-model="form.email" type="email" placeholder="jane@company.com" required
                    class="bg-bg-2 border border-border rounded-[10px] px-4 py-3 text-[15px] text-heading placeholder:text-text-light focus:border-accent outline-none transition-colors"
                  />
                </div>
              </div>

              <div class="flex flex-col gap-2">
                <label class="text-[11px] font-semibold tracking-wide08 uppercase text-text-light">Project Budget</label>
                <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  <label
                    v-for="budget in budgets" :key="budget"
                    :class="[
                      'text-xs font-semibold py-2.5 px-2 rounded-lg border text-center cursor-pointer select-none transition-all',
                      form.budget === budget
                        ? 'bg-accent/10 border-accent text-accent'
                        : 'border-border text-text hover:border-border-hover hover:text-heading'
                    ]"
                  >
                    <input type="radio" :value="budget" v-model="form.budget" class="hidden" />
                    {{ budget }}
                  </label>
                </div>
              </div>

              <div class="flex flex-col gap-2">
                <label class="text-[11px] font-semibold tracking-wide08 uppercase text-text-light" for="message">Tell me about your project</label>
                <textarea
                  id="message" v-model="form.message" rows="5" placeholder="Describe your project, goals, timeline..." required
                  class="bg-bg-2 border border-border rounded-[10px] px-4 py-3 text-[15px] text-heading placeholder:text-text-light focus:border-accent outline-none transition-colors resize-none font-inter"
                ></textarea>
              </div>

              <button
                type="submit"
                :disabled="submitting"
                class="flex items-center justify-center gap-2.5 bg-accent text-bg font-bold text-[15px] py-4 rounded-[10px] hover:bg-accent-dark hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(200,245,66,0.2)] disabled:opacity-70 disabled:cursor-not-allowed transition-all"
              >
                <span v-if="submitting">Sending...</span>
                <span v-else class="flex items-center gap-2.5">
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
