<template>
  <v-toolbar app>
    <v-toolbar-title>Front End</v-toolbar-title>
    <v-spacer />
    <v-toolbar-items>
      <v-btn flat to="/">Home</v-btn>
      <v-btn flat :to="{ name: 'errors_path' }">Errors pages</v-btn>
      <v-btn flat href="/admin">Login</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  data: function() {
    return {
    }
  }
}
</script>
