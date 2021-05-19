export default {
  bannerComponent: {
    show: false,
    type: "warning",
    message: "some warning msg",
    onClose: () => 1
  },
  errorComponent: {
    show: false,
    type: "warning",
    headerInfo: "",
    bodyInfo: "",
    bodyDescription: "",
    actionTitle: "",
    onClose: () => 1,
    onCloseDialog: () => 1
  },
  showLoader: false,
  //pageDestination: 'forgotpassword',
  viewRegistration: false
};
