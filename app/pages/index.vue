<script setup lang="ts">
import { villa } from '~/config/villa'

useSeoMeta({
  title: villa.name,
  description: villa.tagline
})
</script>

<template>
  <UPage>
    <SiteHeader />

    <GallerySection />
    <BookingSection />
    <ContactSection />

    <footer class="py-8 border-t border-stone-200 text-center">
      <p class="text-sm text-stone-500 tracking-wide">
        {{ villa.name }} &nbsp;·&nbsp; © {{ new Date().getFullYear() }}
      </p>
      <nav class="mt-3 flex justify-center gap-6">
        <NuxtLink :to="{ hash: '#' }" class="text-xs tracking-widest uppercase text-stone-400 hover:text-stone-700 transition-colors">Home</NuxtLink>
        <NuxtLink :to="{ hash: '#booking' }" class="text-xs tracking-widest uppercase text-stone-400 hover:text-stone-700 transition-colors">Booking</NuxtLink>
        <NuxtLink :to="{ hash: '#contact' }" class="text-xs tracking-widest uppercase text-stone-400 hover:text-stone-700 transition-colors">Contact</NuxtLink>
      </nav>
    </footer>
  </UPage>
</template>
