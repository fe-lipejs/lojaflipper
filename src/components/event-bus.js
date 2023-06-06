class EventBus {
    constructor() {
      this.eventListeners = {};
    }
  
    $on(eventName, callback) {
      if (!this.eventListeners[eventName]) {
        this.eventListeners[eventName] = [];
      }
      this.eventListeners[eventName].push(callback);
    }
  
    $emit(eventName, data) {
      const listeners = this.eventListeners[eventName];
      if (listeners) {
        listeners.forEach(callback => {
          callback(data);
        });
      }
    }
  }
  
  export default new EventBus();
  