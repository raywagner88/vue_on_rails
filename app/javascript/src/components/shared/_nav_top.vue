<template>
  <v-app-bar app>
    <v-toolbar-title>Front End</v-toolbar-title>
    <v-spacer />
    <v-toolbar-items>
      <v-btn text to="/">Home</v-btn>
      <v-btn text :to="{ name: 'errors_path' }">Errors pages</v-btn>
      <v-btn text href="/admin">Login</v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  data: function() {
    return {
    }
  }
}
</script>
