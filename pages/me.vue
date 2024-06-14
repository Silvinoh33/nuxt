<template>
  <div>
    <!-- <pre>{{ data }}</pre> -->
    <p> <strong>Nom d'utilisateur</strong> :{{ user.name }}</p>
    <p> <strong>Email</strong>:{{ user.email }}</p>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
  import axios from 'axios';

  definePageMeta({
      middleware: ['auth']
  })
  

  const {data: user} = await axios.get("/user");
  // onMounted(async () => {

  // console.log({data: data.value});
  // });
  
</script>

<style>

</style>