<template>
  <v-container>
    <div class='col-xs-12 col-md-6 wrapper'>
      <!-- <router-link :to="{name: 'users_path'}" class='circle warning'>
        {{ metrics.users }}<br /> Users
      </router-link> -->
    </div>
  </v-container>
</template>

<script>
export default {
  components: {
  },

  data: function() {
    return this.$store.state.DashboardStore;
  },

  mounted: function() {
    this.$store.dispatch('DashboardStore/index');
  }
}
</script>
