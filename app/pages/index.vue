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

    <AppFooter />
  </UPage>
</template>
