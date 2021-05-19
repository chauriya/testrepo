<template>
  <div>
    <v-skeleton-loader class="mx-auto" :width="pageWidth" type="image" />
    <v-skeleton-loader type="image" :width="pageWidth" class="mx-auto" />
    <v-skeleton-loader :width="pageWidth" type="image" class="mx-auto" />
  </div>
</template>
<script>
export default {
  name: "ProgressBar",
  computed: {
    pageWidth() {
      return this.$vuetify.breakpoint.mdAndUp ? 530 : 472;
    }
  }
};
</script>
<style scoped lang="stylus">
.v-skeleton-loader
  margin: 12px 0 0;
</style>
