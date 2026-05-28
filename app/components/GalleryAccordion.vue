<script setup lang="ts">
const panels = [
  { label: 'Pool', seed: 10 },
  { label: 'Bedroom', seed: 20 },
  { label: 'Garden', seed: 30 },
  { label: 'Living', seed: 40 },
  { label: 'Beach', seed: 50 }
]

const active = ref<number | null>(null)
</script>

<template>
  <div class="flex h-screen w-full">
    <div
      v-for="(panel, i) in panels"
      :key="panel.label"
      class="relative overflow-hidden cursor-pointer transition-all duration-500 ease-in-out"
      :style="{ flex: active === i ? '4' : '1' }"
      @mouseenter="active = i"
      @mouseleave="active = null"
    >
      <img
        :src="`https://picsum.photos/seed/${panel.seed}/1200/900`"
        :alt="panel.label"
        class="absolute inset-0 w-full h-full object-cover"
      >
      <!-- dark overlay -->
      <div
        class="absolute inset-0 transition-opacity duration-500"
        :class="active === i ? 'bg-black/20' : 'bg-black/50'"
      />
      <!-- label -->
      <div
        class="absolute bottom-8 left-0 right-0 flex justify-center transition-opacity duration-300"
        :class="active === i ? 'opacity-100' : 'opacity-0'"
      >
        <span class="text-white font-serif text-2xl tracking-widest uppercase">
          {{ panel.label }}
        </span>
      </div>
    </div>
  </div>
</template>
