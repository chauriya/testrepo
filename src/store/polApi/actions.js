import { Api } from "@/shared";

/* export const getEligilibityRequest = async ({
  commit,
  getters,
  rootGetters,
}) => {
  try {
    commit("ui/toggleLoader", true, { root: true });
    const eligibilityResponse = await Api.getRequest(
      "pol/myaccount/api/password/reset/eligibility",
      {
        ssn: rootGetters.forgotpassword.ssn,
        dob: rootGetters.forgotpassword.dob,
        primericaemail: rootGetters.forgotpassword.primericaemail,
        ...getters.defaultHeaders,
      }
    );
    commit("ui/toggleLoader", false, { root: true });
    return eligibilityResponse;
  } catch (error) {
    commit("ui/toggleLoader", false, { root: true });
    return Promise.reject(error);
  }
};

export const getCommunicationOptionsRequest = async ({ commit, getters }) => {
  try {
    commit("ui/toggleLoader", true, { root: true });
    const communicationOptionsResponse = await Api.getRequest(
      "pol/myaccount/api/2fa/communicationoptions",
      getters.defaultHeaders
    );
    commit("ui/toggleLoader", false, { root: true });
    return communicationOptionsResponse;
  } catch (error) {
    commit("ui/toggleLoader", false, { root: true });
    return Promise.reject(error);
  }
};

export const getSessionInfoRequest = async ({ commit, getters }) => {
  try {
    commit("ui/toggleLoader", true, { root: true });
    const sessionInfoResponse = await Api.getRequest(
      "pol/session/info",
      getters.defaultHeaders
    );
    commit("ui/toggleLoader", false, { root: true });
    return sessionInfoResponse;
  } catch (error) {
    commit("ui/toggleLoader", false, { root: true });
    return Promise.reject(error);
  }
};

export const sendOTPRequest = async ({ commit, getters, rootGetters }) => {
  try {
    commit("ui/toggleLoader", true, { root: true });
    await Api.postRequest("pol/users/password_reset/otp", {
      maskedValue:
        rootGetters.communicationOptions.nonPriEmail == ""
          ? rootGetters.protectyouraccount.option
          : "",
      userEmail: rootGetters.communicationOptions.nonPriEmail,
      ...getters.defaultHeaders,
    });
    commit("ui/toggleLoader", false, { root: true });
    return;
  } catch(error) {
    commit("ui/toggleLoader", false, { root: true });
    return Promise.reject(error);
  }
};

export const logoutRequest = () => {
  Api.getRequest("registration/logout", {}, {}, false);
};

export const verificationOTPRequest = async ({ commit, getters }, otp) => {
  try {
    commit("ui/toggleLoader", true, { root: true });
    const verificationResponse = await Api.postRequest(
      "pol/myaccount/users/mfa/verification/otp",
      { otp, ...getters.defaultHeaders }
    );
    commit("ui/toggleLoader", false, { root: true });
    return verificationResponse;
  } catch (error) {
    let errorObject = JSON.parse(JSON.stringify(error.response));
    commit("ui/toggleLoader", false, { root: true });
    return Promise.reject(errorObject);
  }
};

export const verifyUserEmailRequest = async ({
  commit,
  getters,
  rootGetters,
}) => {
  try {
    commit("ui/toggleLoader", true, { root: true });
    const verifyUserEmailResponse = await Api.getRequest("pol/users/email", {
      email: rootGetters.forgotpassword.emailId,
      ...getters.defaultHeaders,
    });
    commit("ui/toggleLoader", false, { root: true });
    return verifyUserEmailResponse;
  } catch (error) {
    commit("ui/toggleLoader", false, { root: true });
    return Promise.reject(error);
  }
};

export const postPasswordResetRequest = async (
  { commit, getters, rootGetters },
  body
) => {
  try {
    commit("ui/toggleLoader", true, { root: true });
    const postPasswordResetResponse = await Api.postRequest(
      "pol/myaccount/api/password/reset",
      {
        ...getters.defaultHeaders,
        deviceName: getters.deviceName,
        TrustDevice: rootGetters.verifyCode.trustDevice,
      },
      body
    );
    commit("ui/toggleLoader", false, { root: true });
    return postPasswordResetResponse;
  } catch (error) {
    commit("ui/toggleLoader", false, { root: true });
    return Promise.reject(error);
  }
};

export const landHpRequest = async (
  { commit, getters, rootGetters },
  password
) => {
  // try {
    commit("ui/toggleLoader", true, { root: true });
      await Api.postRequest(
      "pol/myaccount/api/land/hp",
      getters.defaultHeaders,
      {
        userName: rootGetters.forgotpassword.userId,
        password,
      }
    );
    // return landHpResponse;
  // } catch (error) {
  //   commit("ui/toggleLoader", false, { root: true });
  //   return Promise.reject(error);
  // }
}; */

export const redirectToLogin = ({ rootGetters }) => {
  Api.redirectToLogin(rootGetters.getApplicationSource);
};
