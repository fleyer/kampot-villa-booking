<script setup lang="ts">
const panels = [
  { label: 'Pool', seed: 10 },
  { label: 'Bedroom', seed: 20 },
  { label: 'Garden', seed: 30 },
  { label: 'Living', seed: 40 },
  { label: 'Beach', seed: 50 }
]

const active = ref<number>(0)
let timer: ReturnType<typeof setInterval> | null = null

function startLoop() {
  timer = setInterval(() => {
    active.value = (active.value + 1) % panels.length
  }, 3000)
}

function select(i: number) {
  active.value = i
  if (timer) {
    clearInterval(timer)
  }
  startLoop()
}

onMounted(startLoop)
onUnmounted(() => {
  if (timer) {
    clearInterval(timer)
  }
})
</script>

<template>
  <div class="flex h-screen w-full">
    <div
      v-for="(panel, i) in panels"
      :key="panel.label"
      class="relative overflow-hidden cursor-pointer transition-all duration-500 ease-in-out"
      :class="{ 'hidden lg:block': active !== i }"
      :style="{ flex: active === i ? '4' : '1' }"
      @click="select(i)"
    >
      <img
        :src="`https://picsum.photos/seed/${panel.seed}/1200/900`"
        :alt="panel.label"
        class="absolute inset-0 w-full h-full object-cover"
      >
      <div
        class="absolute inset-0 transition-opacity duration-500"
        :class="active === i ? 'bg-black/20' : 'bg-black/50'"
      />
      <div
        class="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-3 transition-opacity duration-300"
        :class="active === i ? 'opacity-100' : 'opacity-0'"
      >
        <span class="text-white font-serif text-2xl tracking-widest uppercase">
          {{ panel.label }}
        </span>
        <div class="w-16 h-0.5 bg-white/30 rounded-full overflow-hidden">
          <div
            v-if="active === i"
            :key="active"
            class="h-full bg-white rounded-full animate-progress"
          />
        </div>
      </div>
    </div>
  </div>
</template>
