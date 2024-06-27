<template>
  <div class="prose w-[500px] rounded-md border-0 shadow-lg p-5 border-t-8 h-96 border-slate-400">
    <h1>Connexion</h1>

    
    <form @submit.prevent="login(form);isclickMeth()">
      <label >
        Email
        <input v-model="form.email" type="email" placeholder="janedoe@gmail.com" required>
      </label>
      <label >
        Password
        <input v-model="form.password" type="password" required>
      </label>
      <div>
        <button class="btn mt-12 transition-all ease-in-out duration-200 w-fit " >Connexion <Icon v-if="isclick" name="svg-spinners:180-ring"/> </button>
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
import type { LoginPayload } from '@types';
const isclick = ref(false);
  definePageMeta({
    layout:'centered',
    middleware: ['guest'],
  })

  const form = ref<LoginPayload>({
    email: '',
    password: '',
  });

  function isclickMeth(){
    if (form.value.email !== null && form.value.password !== null) {
      isclick.value = !isclick.value;
    }
  }

const { login} = useAuth();



  // async function login(payload: LoginPayload){
  //  await axios.post('/login', payload);
  //  useRouter().push('/me');
  // }
</script>

<style >
 
</style>