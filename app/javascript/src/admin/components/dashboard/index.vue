<template>
  <layout>
    <div class='col-xs-12 col-md-6 wrapper'>
      <router-link :to="{name: 'users_path'}" class='circle warning'>
        {{ metrics.users }}<br /> Users
      </router-link>
    </div>
  </layout>
</template>

<script>
import Layout from '../shared/layout';

export default {
  components: {
    Layout
  },

  data: function() {
    return this.$store.state.DashboardStore;
  },

  mounted: function() {
    this.$store.dispatch('DashboardStore/index');
  }
}
</script>
