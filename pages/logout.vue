<template>
  <div class="flex justify-center items-center h-screen text-slate-600"><div class="flex items-center gap-5"><p>Déconnexion</p>   <Icon class="mt-1 text-2xl" name="svg-spinners:3-dots-move"/> </div></div>
</template>
<script lang="ts" setup>

definePageMeta({
  layout: "simple",
});

const { logout } = useAuth();

logout();


// onMounted(async () => {
//   await axios.post("/logout");
//   useRouter().replace("/login");
// });


</script>

<style></style>
