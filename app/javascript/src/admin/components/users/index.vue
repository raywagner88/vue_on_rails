<template>
  <v-container>
    <v-toolbar flat color="white">
      <v-toolbar-title>Users</v-toolbar-title>
      <v-spacer />
      <v-btn depressed color="primary" :to="{ name: 'new_user_path' }">New User</v-btn>
    </v-toolbar>
    <v-data-table :headers="headers" :items="store.users" :search="search">
      <template v-slot:items="props">
        <td>{{ props.item.id }}</td>
        <td>{{ props.item.created_at }}</td>
        <td>{{ props.item.email }}</td>
        <td class="justify-center layout px-0">
          <v-btn icon :to="{ name: 'edit_user_path', params: { id: props.item.id }}">
            <v-icon small>mdi-pencil</v-icon>
          </v-btn>
          <v-btn icon @click="destroy(props.item)">
            <v-icon color="error" small>mdi-delete</v-icon>
          </v-btn>
        </td>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      headers: [
        { text: 'ID', value: 'id' },
        { text: 'Created At', value: 'created_at' },
        { text: 'Email', value: 'email' },
        { text: 'Actions', value: '', sortable: false }
      ]
    }
  },

  computed: {
    store() {
      return this.$store.state.UserStore
    }
  },

  mounted() {
    this.$store.dispatch('UserStore/index');
  },

  methods: {
    destroy(user) {
      if (confirm('Are you sure?')) {
        this.$store.dispatch('UserStore/destroy', user.id).then(
          response => {
            this.$store.dispatch('UserStore/index');
          }
        )
      }
    }
  }
}
</script>
