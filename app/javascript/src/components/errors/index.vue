<template>
  <v-container>
    <h2>Trigger error pages:</h2>
    <ul>
      <li>404 from client side: <a href="/foo-bar-baz">/foo-bar-baz</a></li>
      <li>404 from server side: <a href="/musicians/10000">/musicians/10000</a></li>
      <li>500 from server side: <a href="/musicians/this-will-trigger-an-error">/musicians/this-will-trigger-an-error</a></li>
    </ul>
  </v-container>
</template>

<script>
export default {
  components: {
  }
}
</script>
