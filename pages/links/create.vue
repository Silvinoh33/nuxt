<template>
  <div>
    <div class="prose">
      <h1>Créer un nouveau lien</h1>
      <Goback>ou revenir en arrrière</Goback>


      <div>
        <form @submit.prevent="login(form)">
      <label >
        Nom du lien
        <input v-model="form.url_name" type="text" placeholder="entrer le nom du lien">
      </label>
      <label >
        url
        <input v-model="form.url" type="text" placeholder="entrer l'url">
      </label>
      <div>
        <button class="btn mt-12" >Créer le lien</button>
      </div>
    </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import axios from 'axios';

definePageMeta({
    middleware: ['auth']
})

interface urlPayload {
  url_name: string;
  url: string;
  }

  const form = ref<urlPayload>({
    url_name: '',
    url: '',
  });

  async function login(payload: urlPayload){
   console.log(payload);
   
  }
</script>

<style>

</style>