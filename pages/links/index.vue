<template>
    <div class="">
        <nav class="flex justify-between items-center  mb-4 px-5 prose min-w-full">
            <h1 class="mb-0">Mes liens</h1>
            <div class="flex justify-between  gap-2">
                <!-- <SearchInput :model-value="search" /> -->
                <SearchInput :model-value="search" @update:modelValue="$event => search = $event" />
                <NuxtLink class="no-underline px-4 py-2 bg-emerald-400 text-white rounded-md text-sm hover:bg-emerald-500 transition-all ease-in-out duration-300 flex items-center" to="/links/create">Créer un lien</NuxtLink>
            </div>
        </nav>
<!-- <pre>{{ links }}</pre> -->
                <div v-if="true">
                    <table class="w-full border-collapse   text-sm text-slate-700">
                        <thead class=" bg-slate-100  uppercase border-slate-500 text-left text-slate-900 w-full">
                            <tr>
                                <th>Lien Complet</th>
                                <th>Lien Court</th>
                                <th>Nombre de vues</th>
                                <th>Supprimer</th>
                                <th colspan="1" >Editer</th>
                                <th aria-label="refresh" title="rafraichir"
                                ><Icon name="mdi:reload"/></th>
                            </tr>
                        </thead>
                        <tbody class="" >
                            <tr v-for="link in links" :key="link.id" class="border-b">
                                <td>
                                    <a :href="link.full_link" target="_blank">
                                        {{ link.full_link}}
                                    </a>
                                </td>
                                <td>
                                    <a :href="`${useRuntimeConfig().public.appUrl}/${link.short_link}`"  target="_blank">
                                        {{ `${useRuntimeConfig().public.appUrl.replace(/^http(s?):\/\//, "")}/${link.short_link}` }}
                                    </a>
                                </td>
                                <td>
                                    {{ link.views }}
                                </td>
                                <td>
                                    <button>
                                        <Icon @click="deleteLink(link.id)" name="mdi:trash" class="text-red-500"/>
                                    </button>
                                </td>
                                <td colspan="1" class="text-center">
                                    <NuxtLink :to="`/links/${link.id}`">
                                        <Icon name="material-symbols:edit-square-outline-sharp" class="text-blue-500"/>
                                    </NuxtLink>
                                </td>
                                <td >
                    
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <TailwindPagination :data="data"/>
                    <!-- <TailwindPagination :data="data"/> -->
                    <!-- <p>{{  search }}</p> -->
                    
                </div>
                <div v-else class="flex flex-col gap-3">
                    <Icon name="mdi:loading" class="animate-spin text-emerald-400"/>

                    <p>
                        <span v-if="false">Aucun lien ne correspond à votre recherche</span>

                        <span v-else>Aucun lien créer pour le moment</span>
                        <NuxtLink to="" class="text-xs text-emerald-500 "> Créer votre premier lien</NuxtLink>
                    </p>
                </div>
                
    </div>
</template>

<script lang="ts" setup>
// import { LinkData } from "@types";
// import { PaginateLinksResponse } from "@types";
import axios from "axios";
import { TailwindPagination } from 'laravel-vue-pagination';

/**
 * Définit les métadonnées de la page actuelle, nécessitant l'application d'un middleware d'authentification.
 */
definePageMeta({
  middleware: ["auth"],
});
const {data} = await axios.get("/links");
const links = data.data;
// console.log(data);

const search = ref<string>('');

async function deleteLink(id: number){
await axios.delete(`/links/${id}`);
await axios.get("/links");
}

</script>

<style>
    th{
        @apply px-6 py-3;
    }
    td{
        @apply px-6 py-4;
    }
</style>