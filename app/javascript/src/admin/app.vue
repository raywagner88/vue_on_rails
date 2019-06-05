<template>
  <v-app>
    <nav-top></nav-top>
    <v-content>
      <router-view />
      <modal-chat />
    </v-content>
  </v-app>
</template>

<script>
import ModalChat from './components/modals/chat';

export default {
  components: {
    'modal-chat': ModalChat
  }
}
</script>

