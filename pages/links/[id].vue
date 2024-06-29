<template>
  <div class="mx-auto max-w-md prose">
  <h1>Modifier le lien</h1>
    <goback/>
  <form >
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

definePageMeta({
    middleware: ['auth']
})

</script>

<style >

</style>