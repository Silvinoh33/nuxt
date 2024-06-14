<template>
   <a href="#" class="text-sm mb-5 italic flex items-center gap-2 group" @click.prevent="useRouter().back()">
    <Icon name="material-symbols:arrow-circle-left" class="group-hover:text-emerald-300 transition-all ease-in-out duration-300"/>
    <slot>Retour</slot>
  </a>
</template>

<script lang="ts" setup>

</script>

<style>

</style>