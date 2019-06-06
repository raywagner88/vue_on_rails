<template>
  <v-toolbar app>
    <v-toolbar-title>Front End</v-toolbar-title>
    <v-spacer />
    <v-toolbar-items>
      <v-btn flat to="/">Home</v-btn>
      <v-btn flat :to="{ name: 'users_path' }">Users</v-btn>
      <v-btn flat @click="logout">Logout</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  data: function() {
    return this.$store.state.NavTopStore;
  },

  methods: {
    logout: function() {
      this.$store.dispatch('NavTopStore/logout').then(
        response => {
          window.location.href= '/';
        }
      );
    },
  }
}
</script>
