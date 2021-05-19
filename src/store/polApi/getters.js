import { DeviceId, DetectDevice } from "@/shared";

const defaultHeaders = (state, getters, rootState) => {
  return {
    session: rootState.authParams.session,
    sourceKey: rootState.forgotpassword.userId,
    deviceDna:
      typeof rootState.deviceDna === Object
        ? JSON.stringify(rootState.deviceDna)
        : rootState.deviceDna,
    userId: rootState.forgotpassword.userId,
    applicationSource: rootState.applicationSource,
    deviceid: DeviceId.getDeviceId()
  };
};

const deviceName = () => DetectDevice.getDeviceName();

export { defaultHeaders, deviceName };
