<template>
  <div class="prose w-[500px] rounded-md border-0 shadow-lg p-5 border-t-8  border-slate-400">
    <h1>Inscription</h1>
    <form @submit.prevent="register(form)">
      <label >
        Name
        <input type="text" placeholder="john doe" v-model="form.name">
      </label>
      <label >
        Email
        <input type="email" placeholder="johndoe@gmail.com" v-model="form.email">
      </label>
      <label >
        Password
        <input type="password" v-model="form.password">
      </label>
      <label >
        Confirm Password
        <input type="password" v-model="form.password_confirmation">
      </label>
      <div class="mt-6">
        <span class="text-sm ">Vous avez un  compte ? <NuxtLink class=" text-emerald-500" to="/login">Se connecter</NuxtLink> !</span>
        <button class="btn ml-24">S'inscrire</button>
      </div>
    </form>
    <!-- <FormKit type="form" submit-label="S'inscrire" @submit="register(form)" class="space-y-8" >
      <FormKit type="text" label="Nom" name="name" v-model="form.name" />

      <FormKit type="email" label="Email" name="email" v-model="form.email"/>

      <FormKit type="password" label="Mot de passe" name="password" v-model="form.password" validation="required"/>
      <FormKit type="password" label="Confirmation du mot de passe" name="password_confirmation" v-model="form.password_confirmation" validation="required|confirm:password"/>
    </FormKit> -->
  </div>
</template>

<script lang="ts" setup>
import axios from 'axios';



  definePageMeta({
    layout:'centered',
    middleware: ['guest'],
  });

  interface RegisterPayload {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
  }

  const form = ref<RegisterPayload>({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  });

  async function register(payload: RegisterPayload){
   await axios.post('/register', payload);
   await axios.post('/login', {
    email:payload.email,
    password: payload.password,
   });
   useRouter().push('/me');
  }
</script>

<style>


</style>