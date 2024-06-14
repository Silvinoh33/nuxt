<template>
  <!-- NuxtPage Composant par défaut donné par nuxt -->
  <div class="max-w-7xl mx-auto">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
  useHead({
    title: 'Url shortener',
   
  })

</script>
