<template>
  <div class='row'>
    <div class='col-xs-12'>

      <h1>Front end</h1>

      <ul class="nav nav-pills">
        <li :class="activeOn(['root_path'])">
          <router-link :to="{ name: 'root_path' }">Home</router-link>
        </li>
        <li :class="activeOn(['errors_path', 'errors_path'])">
          <router-link :to="{ name: 'errors_path' }">Errors pages</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

  data: function() {
    return {
    }
  },

  methods: {
    activeOn: function(paths) {
      if(paths.includes(this.$route.name)) {
        return 'active';
      } else {
        return '';
      }
    }
  }
}
</script>
