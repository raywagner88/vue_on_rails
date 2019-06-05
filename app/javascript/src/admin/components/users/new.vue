<template>
  <v-container>
    <div class='col-xs-12'>
      <ul class='breadcrumb pull-left'>
        <li><router-link :to="{ name: 'root_path' }">Dashboard</router-link>
        <li><router-link :to="{ name: 'users_path' }">Users</router-link>
        <li>Creating a new user</li>
      </ul>
    </div>
    <div class='col-xs-12'>
      <form v-on:submit.prevent="create" accept-charset="UTF-8" class="form">
        <form-user></form-user>
      </form>
    </div>
  </v-container>
</template>

<script>
import FormUser from './_form.vue';

export default {
  components: {
    'form-user': FormUser
  },

  data: function() {
    return this.$store.state.UserStore;
  },

  mounted: function() {
    this.$store.dispatch('UserStore/new', this.$route.params.id)
  },

  methods: {
    create: function() {
      this.$store.dispatch('UserStore/create', this.user).then(
        response => {
          this.$router.push({name: 'edit_user_path', params: {id: response.user.id}})
        }
      )
    }
  }
}
</script>
