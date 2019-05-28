<template>
   <div>
   {{roles}}
   </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Account',
  components: {

  },
  data() {
    return {

    };
  },
  computed: {
    ...mapGetters(['roles']),
  },
  methods: {
    ...mapActions({
      getInfo: 'user/getInfo',
    }),
  },
  mounted() {
    this.getInfo();
  },
};
</script>

<style lang="scss" scoped>
</style>
