<template>
  <div class="auth">
    <h1>Authentication {{count}} {{total}}</h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'auth',
  data() {
    return {};
  },
  computed: {
    count() {
      return this.$store.state.userinfo.count;
    },
    ...mapGetters('userinfo', {
      total: 'getDoubleCount',
    }),
    // getDoubleCount() {
    //   return this.$store.getters.getDoubleCount;
    // },
  },
};
</script>
