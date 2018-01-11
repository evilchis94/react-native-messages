export default {
  messageBar: null,
  registerMessageBar(component) {
    this.messageBar = component;
  },
  unregisterMessageBar() {
    this.messageBar = null;
  },
  showMessage(message, type = 'success') {
    this.messageBar.pushMessage({ message, type });
  },
};
