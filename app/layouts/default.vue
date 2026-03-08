<script setup lang="ts">
import FeatureCards from '~/components/FeatureCards.vue';
import NewsLetter from '~/components/NewsLetter.vue';

</script>

<template>
  <div>
    <NavBar />  <!-- ← just use it, no import needed -->
    <main class="">  <!-- pt-16 pushes content below fixed navbar -->
      <slot />
    </main>
    <FeatureCards />
    <TestimonialSection />
    <NewsLetter />
    <Footer />
  </div>
</template>