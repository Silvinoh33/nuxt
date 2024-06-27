<template>
  <div>
    <div class="prose">
      <h1>Créer un nouveau lien</h1>
      <Goback>ou revenir en arrrière</Goback>

      <div class="flex items-center w-[200%] p-5 shadow-inner rounded-md">
        <div class="">
          <img src="../../assets/images/ff.png" />
        </div>
        <form class="w-1/2" @submit.prevent="login(form)">
          <input
            v-model="form.url_name"
            name="full_link"
            type="url"
            placeholder="entrer le lien au complet"
          />
          <!-- <input v-model="form.url_name" name="full_link" type="text" placeholder="centrer le lien court"> -->

          <div>
            <button class="btn mt-12">Créer le lien</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import axios from "axios";

definePageMeta({
  middleware: ["auth"],
});

interface urlPayload {
  url_name: string;
  url: string;
}

const form = ref<urlPayload>({
  url_name: "",
  url: "",
});

async function login(payload: urlPayload) {
  console.log(payload);
}
</script>

<style></style>
