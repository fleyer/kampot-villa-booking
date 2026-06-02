<script setup lang="ts">
import { villa } from '~/config/villa'

const scrolled = ref(false)
const mobileOpen = ref(false)

const links = [
  { label: 'Home', to: { hash: '' } },
  { label: 'Booking', to: { hash: '#booking' } },
  { label: 'Contact', to: { hash: '#contact' } }
]

onMounted(() => {
  const onScroll = () => { scrolled.value = window.scrollY > 40 }
  window.addEventListener('scroll', onScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', onScroll))
})
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-white/95 backdrop-blur border-b border-stone-200 shadow-sm' : 'bg-transparent'"
  >
    <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <NuxtLink :to="{ hash: '' }" class="font-serif text-xl tracking-wide" :class="scrolled ? 'text-stone-900' : 'text-white'">
        {{ villa.name }}
      </NuxtLink>

      <!-- Desktop nav -->
      <nav class="hidden md:flex items-center gap-8">
        <NuxtLink
          v-for="link in links"
          :key="link.label"
          :to="link.to"
          class="text-sm tracking-widest uppercase transition-colors"
          :class="scrolled ? 'text-stone-600 hover:text-stone-900' : 'text-white/80 hover:text-white'"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <!-- Mobile hamburger -->
      <button
        class="md:hidden flex flex-col gap-1.5 p-2"
        aria-label="Toggle menu"
        @click="mobileOpen = !mobileOpen"
      >
        <span
          v-for="i in 3"
          :key="i"
          class="block w-5 h-px transition-colors"
          :class="scrolled ? 'bg-stone-700' : 'bg-white'"
        />
      </button>
    </div>

  </header>

  <!-- Mobile menu overlay -->
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      leave-active-class="transition-opacity duration-300"
      leave-to-class="opacity-0"
    >
      <div
        v-if="mobileOpen"
        class="md:hidden fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-10"
      >
        <button
          class="absolute top-5 right-6 p-2 text-stone-400 hover:text-stone-700 cursor-pointer"
          aria-label="Close menu"
          @click="mobileOpen = false"
        >
          <UIcon name="i-lucide-x" class="size-6" />
        </button>

        <NuxtLink
          v-for="link in links"
          :key="link.label"
          :to="link.to"
          class="text-2xl font-serif tracking-widest uppercase text-stone-700 hover:text-brand-500 transition-colors cursor-pointer"
          @click="mobileOpen = false"
        >
          {{ link.label }}
        </NuxtLink>
      </div>
    </Transition>
  </Teleport>
</template>
