<template>
  <v-container>
    <v-toolbar text color="white">
      <v-toolbar-title>Users</v-toolbar-title>
      <v-spacer />
      <v-flex sm4 hidden-xs-only>
        <v-text-field v-model="search" label="Search" single-line hide-details prepend-icon="mdi-magnify"></v-text-field>
      </v-flex>
      <v-btn depressed color="primary" @click="newUser">New User</v-btn>
    </v-toolbar>
    <v-data-table :headers="headers" :items="store.users" :search="search">
      <template v-slot:items="props">
        <td>{{ props.item.id }}</td>
        <td>{{ props.item.created_at }}</td>
        <td>{{ props.item.email }}</td>
        <td>
          <v-icon class="mr-2" small @click="edit(props.item)">mdi-pencil</v-icon>
          <v-icon color="error" small @click="destroy(props.item)">mdi-delete</v-icon>
        </td>
      </template>
    </v-data-table>
    <v-dialog v-model="dialog" max-width="500">
      <v-card>
        <v-card-title>
          <span class="headline">{{ formTitle }} User</span>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-text-field v-model="store.user.email" label="Email" :error-messages="store.errors.email"></v-text-field>
            <v-text-field v-model="store.user.password" type="password" label="Password" :error-messages="store.errors.password"></v-text-field>
            <v-text-field v-model="store.user.password_confirmation" type="password" label="Confirm Password" :error-messages="store.errors.password_confirmation"></v-text-field>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer />
          <v-btn color="warning" text @click="dialog = false">Cancel</v-btn>
          <v-btn color="primary" text @click="save(store.user)">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
      ],
      dialog: false,
      formTitle: '',
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
    save(user) {
      if (user.id) {
        this.update(user);
      } else {
        this.create(user);
      }
    },
    newUser() {
      this.$store.dispatch('UserStore/new').then(
        response => {
          this.formTitle = 'New';
          this.dialog = true;
        }
      )
    },
    create(user) {
      this.$store.dispatch('UserStore/create', user).then(
        response => {
          this.$store.dispatch('UserStore/index');
          this.dialog = false;
        }
      )
    },
    edit(user) {
      this.$store.dispatch('UserStore/edit', user.id).then(
        response => {
          this.formTitle = 'Edit';
          this.dialog = true;
        }
      )
    },
    update(user) {
      this.$store.dispatch('UserStore/update', user).then(
        response => {
          this.$store.dispatch('UserStore/index');
          this.dialog = false;
        }
      )
    },
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
