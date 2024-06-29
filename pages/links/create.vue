<template>
  <div>
    <div class="prose">
      <h1>Créer un nouveau lien</h1>
      <Goback>ou revenir en arrrière</Goback>

      <div class="flex items-center w-[200%] p-5 shadow-inner bg-emerald-50 rounded-md">
        <div class="">
          <img src="../../assets/images/ff.png" />
        </div>
          <form class="w-1/2" @submit.prevent="createLink(form)">
            <input
              v-model="form.full_link"
              name="full_link"
              type="url"
              placeholder="entrer le lien au complet"
              class="border w-96"
              required
            />

            <div>
              <button class="btn mt-12">Créer le lien</button>
            </div>
          </form>
          <!-- <button @click="push.success('Lien crée avec succès')">Push</button> -->

  <Notivue v-slot="item">
    <Notification :item="item" />
  </Notivue>
          <!-- <button @click="push.success('Something good has been pushed!')">test</button> -->
        <!-- <FormKit type="form" submit-label="Créer le lien">
            <FormKit type="url" name="full_link" label="Lien complet" validation="required"></FormKit>
        </FormKit> -->
        
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { urlPayload } from "@types";
import axios from "axios";
import { nanoid } from "nanoid";



definePageMeta({
  middleware: ["auth"],
});


const form = ref<urlPayload>({
  full_link: "",
});

async function createLink(payload: urlPayload) {
  // console.log(payload);
  try {
    await axios.post("links", {
      ...payload,
      short_link: nanoid(8),

    });
    useRouter().push("/links");
    push.success('Lien crée avec succès')
  } catch (error) {
    // handleInvalidFormError(error);
    console.log(error);
    
}
}
</script>

<style></style>
