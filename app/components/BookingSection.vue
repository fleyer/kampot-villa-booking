<script setup lang="ts">
import { sectionUi } from '~/config/ui'
import { bookingOptions } from '~/config/villa'
</script>

<template>
  <UPageSection id="booking" :ui="sectionUi" class="min-h-screen flex flex-col py-24 px-6">
    <h2 class="text-3xl font-serif font-bold text-brand-900 tracking-tight mb-12 text-center">
      Book Your Stay
    </h2>

    <div class="flex flex-col lg:flex-row gap-6 w-full justify-center items-center">
      <div
        v-for="option in bookingOptions"
        :key="option.name"
        class="flex flex-col flex-1 rounded-2xl overflow-hidden max-w-80 shadow-md"
        :class="option.featured ? 'ring-2 ring-brand-500' : ''"
      >
        <img
          :src="option.image"
          :alt="option.name"
          class="w-full h-48 object-cover"
        >

        <div class="flex flex-col flex-1 items-center text-center p-8">
          <h3 class="text-lg font-semibold text-stone-800 tracking-wide">{{ option.name }}</h3>
          <p class="mt-2 text-2xl font-bold text-primary">{{ option.price }}</p>
          <p class="mt-4 text-sm text-stone-500 leading-relaxed flex-1">{{ option.description }}</p>
          <UButton
            :to="option.href"
            color="primary"
            variant="solid"
            size="lg"
            block
            class="mt-8"
          >
            {{ option.cta }}
          </UButton>
        </div>
      </div>
    </div>
  </UPageSection>
</template>
