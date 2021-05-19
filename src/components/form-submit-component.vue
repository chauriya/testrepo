<template>
  <v-row
    justify="center"
    :class="{ 'flex-column-reverse': $vuetify.breakpoint.xsOnly }"
  >
    <v-col cols="12" sm="6">
      <PriButton
        block
        outlined
        height="48"
        width="224"
        class="rounded custom-btn btn-style"
        v-on:click="onCancelClick"
        >{{ cancelBtnText }}</PriButton
      >
    </v-col>
    <v-col cols="12" sm="6">
      <PriButton
        block
        class="rounded btn-style"
        @click="submitFormClick"
        :disabled="isDisabled"
        primary
        height="48"
        width="224"
        >{{ submitBtnText }}</PriButton
      >
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
import { PriButton } from "@/shared-components";

export default {
  components: {
    PriButton
  },
  props: {
    submitBtnText: {
      type: String,
      default: "Next"
    },
    cancelBtnText: {
      type: String,
      default: "Cancel"
    },
    onSubmitForm: {
      type: Function,
      default: () => 1
    },
    isDisabled: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    ...mapState(["viewRegistration"])
  },
  methods: {
    ...mapActions("polApi", ["redirectToLogin"]),
    ...mapMutations("ui", ["setPageDestination"]),
    submitFormClick() {
      const next =
        !this.viewRegistration && this.$route.meta.prev === null
          ? "verifycode"
          : this.$route.meta.next;
      this.setPageDestination(next);
      this.onSubmitForm();
    }
  }
};
</script>
<style lang="stylus">
.v-application
  .btn-style
    span.v-btn__content
      font-size: 18px !important;
      font-weight: 600 !important;
  .custom-btn
    span.v-btn__content
      color: var(--v-btnBlue-base);
//  button.custom-bgcolor
.theme--light.v-btn.v-btn--disabled:not(.v-btn--icon):not(.v-btn--flat):not(.v-btn--outline)
  background-color: var(--v-grey300-base) !important;
  color: var(--v-black200-base) !important
</style>
