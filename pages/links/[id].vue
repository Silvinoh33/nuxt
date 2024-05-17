<template>
  <div class="mx-auto max-w-md prose">
  <h1>Modifier le lien</h1>
    <goback/>
  <form action="">
  <label for="">
    <div class="mb-2">Lien Court</div>
        <input type="text">
    
  </label>
  <label for="">
    <div class="mb-2">Lien Complet</div>
        <input type="text">
    
  </label>
  <button class="bg-slate-700 transition-all hover:bg-slate-900 duration-300 text-sm text-white px-3 py-2 rounded-md">Modifier</button>
  </form>
    
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
  label{
    @apply block mb-2 text-sm font-medium text-gray-900;
  }
  input{
    @apply bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500;
  }
</style>