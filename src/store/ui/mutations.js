export const showBanner = (
  state,
  { type = "", message = "", onClose = () => 1 }
) => {
  state.bannerComponent.type = type;
  state.bannerComponent.message = message;
  state.bannerComponent.onClose = onClose;
  state.bannerComponent.show = type !== "" ? true : false;
};

export const hideBanner = state => {
  state.bannerComponent.show = false;
};

export const showError = (
  state,
  {
    headerInfo = "",
    bodyInfo = "",
    bodyDescription = "",
    actionTitle = "",
    onClose = () => 1,
    onCloseDialog = () => 1
  }
) => {
  state.errorComponent.show = true; //modelError
  state.errorComponent.headerInfo = headerInfo;
  state.errorComponent.bodyInfo = bodyInfo;
  state.errorComponent.bodyDescription = bodyDescription;
  state.errorComponent.actionTitle = actionTitle;
  state.errorComponent.onClose = onClose;
  state.errorComponent.onCloseDialog = onCloseDialog;
};

export const hideError = state => {
  state.errorComponent.show = false;
};

export const toggleLoader = (state, value) => {
  state.showLoader = value;
};

export const setPageDestination = (state, value) => {
  state.pageDestination = value;
};
