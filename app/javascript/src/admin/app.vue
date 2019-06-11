<template>
  <v-app>
    <nav-top></nav-top>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('UserStore/user');
  }
}
</script>

