import axios from "axios";
import { DeviceId } from "@/shared";

axios.defaults.withCredentials = true;
axios.interceptors.response.use(response => {
  DeviceId.setDeviceId(response.headers);
  return response;
});
export default {
  getEnv() {
    let env = "gtw";
    const hostEnv = window.location.hostname.split(".")[0];
    if (hostEnv == "drs") {
      env = "gtwt";
    }
    if (hostEnv == "localhost") {
      env = "gtwd";
    }
    if (hostEnv == "dev" || hostEnv == "test") {
      env = `gtw${hostEnv[0]}`;
    }
    return { env, hostEnv };
  },
  getBaseUrl(self = true) {
    let baseUrl = "/";
    if (self) {
      let { env } = this.getEnv();
      // env = env !== '' ? `${env}.` : '';
      baseUrl = `https://${env}.primericaonline.com/`;
    }
    return baseUrl;
  },
  async getRequest(url, headers, params, baseEnv = true) {
    /* return await axios.get(this.getBaseUrl(baseEnv) + url, {
      headers: headers,
      params: params,
    }); */
    if (
      url === "pol/myaccount/api/2fa/communicationoptions" ||
      url == "pol/users/email"
    ) {
      return Promise.resolve({
        headers,
        params,
        baseEnv,
        status: 200,
        data: {
          preferenceInd: "E",
          phoneOptions: ["(***) ***-3545"],
          emailOptions: ["tests@mail.com"]
        }
      });
    }
    if (url === "pol/myaccount/api/password/reset/eligibility")
      return Promise.resolve({
        headers: {
          session: "somesessionkey"
        },
        data: {
          message: null,
          primaryCo: "04",
          eligibleToResetPwd: true,
          rvpOrAbove: true
        }
      });
    if (url === "pol/session/info")
      return Promise.resolve({
        data: { userId: "rep123" }
      });
  },
  async postRequest(url, headers, body, baseEnv = true) {
    /* return await axios.post(this.getBaseUrl(baseEnv) + url, body, {
      headers: headers,
    }); */
    if (url == "pol/myaccount/users/mfa/verification/otp") {
      /* return Promise.resolve({
          headers: {session: "sddgfdg"},
          status: 200
      }) */
      return Promise.reject({
        headers,
        body,
        baseEnv,
        data: { error: { errorCode: 4038, count: 2 } }
      });
    }
    if (
      url == "pol/users/password_reset/otp" ||
      url == "pol/myaccount/api/password/reset"
    ) {
      return Promise.resolve();
      //return Promise.reject({response: {data: {error:{errorCode: 4030}}}})
    }
  },
  redirectToLogin(applicationSource = "") {
    let { hostEnv } = this.getEnv();
    hostEnv = hostEnv == "www" ? "" : hostEnv + ".";
    if (hostEnv == "localhost.") {
      window.open("/registration", "_self");
      return;
    }
    if (applicationSource === "PriApp") {
      window.parent.postMessage("PRIAPPLOGIN", "*");
    } else {
      window.open(`https://${hostEnv}primericaonline.com`, "_self");
    }
  }
};
