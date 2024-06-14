<template>
  <div>
      <nav class="bg-slate-800 text-white p-4 shadow-sm shadow-slate-800 flex justify-between items-center mb-10">
        <NuxtLink to="/" class="text-4xl bg-gradient-to-r from-white via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text font-bold">
          URLShortify
        </NuxtLink>
        <div class="space-x-3 font-thin">
          <NuxtLink to="/me">Profile</NuxtLink>
          <NuxtLink to="/links">Liens</NuxtLink>
          <NuxtLink to="/logout">
            <Icon name="mdi:logout"/>
          </NuxtLink>

        </div>
      </nav>
  </div>
</template>

<script lang="ts" setup>
  
</script>

<style>

</style>