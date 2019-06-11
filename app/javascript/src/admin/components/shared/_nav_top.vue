<template>
  <v-app-bar app>
    <v-toolbar-title>Front End</v-toolbar-title>
    <v-spacer />
    <v-toolbar-items>
      <v-btn text to="/">Home</v-btn>
      <v-btn text :to="{ name: 'users_path' }">Users</v-btn>
      <v-btn text @click="logout">Logout</v-btn>
    </v-toolbar-items>
  </v-app-bar>
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
