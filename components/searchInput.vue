<template>
  <div class="relative">
    <Icon name="mdi:search" class="absolute  top-1/2 -translate-y-1/2 left-2"/>
    <input type="text" placeholder="Rechercher un lien ..." class="pl-10 p-2 rounded-md border border-gray-300 focus:border-emerald-400 outline-none focus:ring-emerald-400 focus:ring-1" :value="props.modelValue"  @input="$emit('update:modelValue',($event.target as HTMLInputElement).value)" />

  
  </div>
 
</template>

<script lang="ts" setup>
  import { defineProps } from 'vue';

const props = defineProps<{
    modelValue?: string
  }>();
  // const modelValue = defineModel();
</script>

<style>

</style>