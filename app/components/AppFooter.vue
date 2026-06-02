<script setup lang="ts">
import { villa } from '~/config/villa'
import { credits } from '~/config/credits'

const [labelBefore, labelAfter] = credits.label.split('{name}')
</script>

<template>
  <footer class="py-8 border-t border-stone-200 text-center">
    <p class="text-sm text-stone-500 tracking-wide">
      {{ villa.name }} &nbsp;·&nbsp; © {{ new Date().getFullYear() }}
    </p>

    <nav class="mt-3 flex justify-center gap-6">
      <NuxtLink :to="{ hash: '#' }" class="text-xs tracking-widest uppercase text-stone-400 hover:text-stone-700 transition-colors">Home</NuxtLink>
      <NuxtLink :to="{ hash: '#booking' }" class="text-xs tracking-widest uppercase text-stone-400 hover:text-stone-700 transition-colors">Booking</NuxtLink>
      <NuxtLink :to="{ hash: '#contact' }" class="text-xs tracking-widest uppercase text-stone-400 hover:text-stone-700 transition-colors">Contact</NuxtLink>
    </nav>

    <p class="mt-4 text-xs text-stone-400">
      {{ labelBefore }}<a
        :href="credits.url"
        target="_blank"
        rel="noopener noreferrer"
        class="hover:text-stone-600 underline-offset-2 hover:underline transition-colors"
      >{{ credits.name }}</a>{{ labelAfter }}
    </p>
  </footer>
</template>
