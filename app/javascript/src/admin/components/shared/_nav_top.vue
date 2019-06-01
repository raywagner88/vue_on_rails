<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="/admin">Admin</a>
      </div>

      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav navbar-right">
          <ul class="nav navbar-nav">
            <li><router-link :to="'/'">Dashboard</router-link></li>
            <li><router-link :to="'/users'">Users</router-link></li>
            <li><a href='#' @click.prevent="startChat">Chat</a></li>
            <li><a href="#" @click.prevent="logout">Logout</a></li>
          </ul>
        </ul>
      </div>
    </div>
    <modal-chat></modal-chat>
  </nav>
</template>

<script>
import ModalChat from '../modals/chat';

export default {
  components: {
    'modal-chat': ModalChat
  },

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
    startChat: function() {
      $("[data-is='modalChat']").modal()
    }
  }
}
</script>
