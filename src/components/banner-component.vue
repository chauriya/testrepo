<template>
  <div
    class="banner-wrap elevation-2 pa-2 d-flex mx-n4 mt-11 mt-md-13"
    flex
    :class="attributes.wrapClass"
    v-if="bannerComponent.show"
  >
    <div class="wrap-icon" :class="attributes.iconClass">
      <v-icon size="24" :class="attributes.iconClass">
        {{ attributes.icon }}
      </v-icon>
    </div>
    <div>
      <p class="pl-4 black400--text" v-html="bannerComponent.message"></p>
    </div>
    <v-spacer></v-spacer>
    <div class="wrap-close">
      <span>
        <v-icon size="24" color="black400" right @click.native="close"
          >mdi-close</v-icon
        >
      </span>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "banner-component",
  computed: {
    ...mapState("ui", ["bannerComponent"]),
    attributes() {
      let attributes = {
        wrapClass: "success-wrap",
        iconClass: "success-icon-wrap",
        icon: "mdi-check-circle"
      };
      if (this.bannerComponent.type === "error") {
        attributes = {
          wrapClass: "error-wrap",
          iconClass: "error-icon-wrap",
          icon: "mdi-alert-circle"
        };
      } else if (this.bannerComponent.type === "warning") {
        attributes = {
          wrapClass: "warning-wrap",
          iconClass: "warning-icon-wrap",
          icon: "mdi-alert"
        };
      }
      return attributes;
    }
  },
  methods: {
    ...mapMutations("ui", ["hideBanner"]),
    close() {
      this.hideBanner();
      this.bannerComponent.onClose();
    }
  }
};
</script>
