<script setup lang="ts">
import { sectionUi } from '~/config/ui'
</script>

<template>
  <UPageSection
    id="gallery"
    :ui="sectionUi"
  >
    <GalleryAccordion />
  </UPageSection>
</template>
