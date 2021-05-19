<template>
  <div>
    <v-app id="inspire">
      <v-app-bar fixed color="primary" dark>
        <v-icon @click="backButton" v-if="showbackbutton"
          >mdi-arrow-left</v-icon
        >
        <v-spacer />
        <v-toolbar-title class="text-h5 font-sans">{{
          $route.meta.title
        }}</v-toolbar-title>
        <v-spacer />
      </v-app-bar>
      <v-container fluid class="py-0">
        <v-row v-if="bannerShow">
          <v-col cols="12" class="pb-0">
            <BannerComponent />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" :class="{ 'pt-16': !bannerShow }" class="px-4 pt-0">
            <LoaderComponent v-show="showLoader" />
            <v-responsive
              :max-width="pageWidth"
              class="mx-auto pt-3"
              v-show="!showLoader"
            >
              <router-view></router-view>
              <ErrorComponent />
            </v-responsive>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import { ErrorComponent, BannerComponent, LoaderComponent } from "@/components";

export default {
  name: "App",
  components: {
    ErrorComponent,
    BannerComponent,
    LoaderComponent
  },
  computed: {
    ...mapState("ui", ["showLoader", "viewRegistration"]),
    ...mapGetters("ui", ["bannerShow"]),
    showbackbutton() {
      return this.$route.meta.showbutton;
    },
    pageWidth() {
      return this.$vuetify.breakpoint.mdAndUp ? 530 : 472;
    }
  },
  methods: {
    ...mapMutations("ui", ["hideBanner", "setPageDestination"]),
    backButton() {
      const prev =
        !this.viewRegistration && this.$route.meta.prev === "pya"
          ? "registration"
          : this.$route.meta.prev;
      this.setPageDestination(prev);
      this.$router.go(-1);
      this.hideBanner();
    }
  }
};
</script>
