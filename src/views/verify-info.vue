<template>
  <v-form ref="verifyInfoForm">
    <v-container>
      <v-row>
        <v-col cols="12" class="font-weight-black pb-0"
          >{{ $t('VI_QUE_ONE')}}</v-col
        >
      </v-row>
      <v-row>
        <v-col cols="12" class="pt-1"
          >{{ $t('VI_SUGGESTION_ONE')}}</v-col
        >
      </v-row>
      <v-row>
        <v-col cols="12" class="font-weight-black pb-0"
          >{{ $t('VI_REPID')}}</v-col
        >
      </v-row>
      <v-row>
        <v-col cols="12" class="pt-1"
          >{{ $t('KL513')}}</v-col
        >
      </v-row>
      <v-row>
        <v-col cols="12" class="font-weight-black pb-0"
          >{{ $t('VI_REPID')}}</v-col
        >
      </v-row>
      <v-row>
        <v-col cols="12" class="pt-1"
          >{{ $t('KL513')}}</v-col
        >
      </v-row>
      <SubmitButtonComponent
        :onSubmitForm="submitForm"
        cancelBtnText="Return to Sign In"
        :isDisabled="!this.validForm"
      />
    </v-container>
    <FooterComponent />
  </v-form>
</template>
<script>
import { /* mapState, */ mapActions } from "vuex";
import View from "@/views/view.vue";

export default {
  name: "verifyInfo",
  extends: View,
  /* components: {
    PriRepId,
    PriSSN,
    PriDatepicker,
    PriEmail
  }, */
  data: () => ({
    genericError: {
      type: "warning",
      message:
        "Unable to reset your password. Please contact your RVP or call (888) 737-2255 US or (905) 812-3520 Canada for assistance with your account."
    },
    errorMessage: {
      invalid_user:
        "The information you entered does not match the records on our system. If you feel the information you have entered is correct, you may need to have our system updated. For US, call 1-888-737-2255. For Canadian Users, call 1-905-812-3520.",
      locked_password:
        "Password reset is disabled. Please conact your RVP for assitance.",
      incorrect_info:
        "The information you entered does not match the records on our system.If you feel the information you have entered is correct, you may need to have our system updated.For US, call 1-888-737-2255.For Canadian Users, call 1-905-812-3520.",
      home_office_user:
        "Please contact Home Office Technical Support for passowrd assistance."
    }
  }),
  computed: {
    //...mapState(["forgotpassword"])
  },
  created() {
    //this.resetSessionBannerTimer();
    /* this.showBanner({type: 'error', 
        message: 'some warning msg test'}); */
  },
  methods: {
    /* ...mapActions([
      "resetSessionBannerTimer",
      "startSessionBannerTimer",
      "setAuthParams",
      "setCommunicationOptions",
      "setForgotPassword"
    ]), */
    //...mapActions("polApi", ["getEligilibityRequest", "getCommunicationOptionsRequest"]),
    ...mapActions("ui", ["setPageDestination"]),
    async submitForm() {},
    handleValueChanged(data) {
      const [year, month, date] = data.split("-");
      this.forgotpassword.dob = month + "/" + date + "/" + year;
    }
  }
};
</script>
