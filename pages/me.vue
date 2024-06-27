<template>
  <div v-if="user">
    <!-- <pre>{{ data }}</pre> -->
    <p> <strong>Nom d'utilisateur</strong> :{{ user.name }}</p>
    <p> <strong>Email</strong>:{{ user.email }}</p>
  </div>
</template>

<script lang="ts" setup>
  definePageMeta({
    middleware: ['auth']
});
const {user} = useAuth();
</script>

<style>

</style>