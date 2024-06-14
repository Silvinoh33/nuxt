<template>
  <div class="prose w-[500px] rounded-md border-0 shadow-lg p-5 border-t-8 h-96 border-slate-400">
    <h1>Connexion</h1>

    
    <form @submit.prevent="login(form)">
      <label >
        Email
        <input v-model="form.email" type="email" placeholder="janedoe@gmail.com">
      </label>
      <label >
        Password
        <input v-model="form.password" type="password">
      </label>
      <div>
        <button class="btn mt-12" >Connexion</button>
        <span class="text-sm ml-6">Vous n'avez pas de compte ? <NuxtLink class=" text-emerald-500" to="register">Incrivez-vous</NuxtLink> !</span>
      </div>
    </form>

  <!-- <FormKit type="form" submit-label="Se connecter" @submit="login" class="space-y-8">
    <FormKit type ="email" label="Email" name="email"/>
    <FormKit type="password" label="Mot de passe" name="password"/>
  </FormKit> -->
    </div>
</template>

<script lang="ts" setup>
import axios from "axios";

  definePageMeta({
    layout:'centered',
    middleware: ['guest'],
  })

  interface LoginPayload {
    email: string;
    password: string;
  }

  const form = ref<LoginPayload>({
    email: '',
    password: '',
  });

  async function login(payload: LoginPayload){
   await axios.post('/login', payload);
   useRouter().push('/me');
  }
</script>

<style >
 
</style>