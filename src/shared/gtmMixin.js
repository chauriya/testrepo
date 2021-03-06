export default {
  methods: {
    gtmClickEvent(event, category, action, label) {
      window.dataLayer.push({
        event: event,
        category: category,
        action: action,
        label: label,
        timestamp: new Date()
      });
    },

    gtmPageView(title) {
      window.dataLayer.push({
        event: "pageview",
        title: title,
        timestamp: new Date()
      });
    },

    gtmRegType(regtype) {
      window.dataLayer.push({
        repRegType: regtype,
        timestamp: new Date()
      });
    },

    gtmServiceLabel(servicelabel) {
      window.dataLayer.push({
        serviceLevel: servicelabel,
        timestamp: new Date()
      });
    },

    gtmChannel(channel) {
      window.dataLayer.push({
        "2FAchannel": channel,
        timestamp: new Date()
      });
    },

    gtmBillOnFile(value) {
      window.dataLayer.push({
        billOnFile: value,
        timestamp: new Date()
      });
    }
  }
};
