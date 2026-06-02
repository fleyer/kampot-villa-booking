<script setup lang="ts">
import { sectionUi } from '~/config/ui'
import { contactOptions } from '~/config/contact'
</script>

<template>
  <UPageSection id="contact" :ui="sectionUi" class="min-h-screen flex flex-col py-24 px-6">
    <h2 class="text-3xl font-serif font-bold text-brand-900 tracking-tight mb-12 text-center">
      Get in Touch
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 w-full max-w-3xl mx-auto justify-items-center">
      <div
        v-for="option in contactOptions"
        :key="option.label"
        class="flex flex-col rounded-2xl shadow-md p-8 w-full max-w-[250px]"
      >
        <UIcon :name="option.icon" class="text-primary size-8 mb-4" />
        <h3 class="text-lg font-semibold text-stone-800">{{ option.label }}</h3>
        <p class="mt-1 text-sm text-stone-400">{{ option.description }}</p>
        <p class="mt-3 text-sm font-medium text-stone-600 flex-1">{{ option.value }}</p>
        <UButton
          :to="option.href"
          color="primary"
          variant="ghost"
          block
          class="mt-6"
          target="_blank"
        >
          {{ option.cta }}
        </UButton>
      </div>
    </div>
  </UPageSection>
</template>
