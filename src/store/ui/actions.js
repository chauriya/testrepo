export const showBanner = async (
  { commit },
  { type = "", message = "", onClose = () => 1 }
) => {
  commit("showBanner", { type, message, onClose });
  setTimeout(() => {
    commit("hideBanner");
  }, 10000);
};

export const showError = async (
  { commit },
  {
    headerInfo = "",
    bodyInfo = "",
    bodyDescription = "",
    actionTitle = "",
    onClose = () => 1,
    onCloseDialog = () => 1
  }
) => {
  commit("showError", {
    headerInfo,
    bodyInfo,
    bodyDescription,
    actionTitle,
    onClose,
    onCloseDialog
  });
};

export const toggleLoader = async ({ commit }, value) => {
  commit("toggleLoader", value);
};
