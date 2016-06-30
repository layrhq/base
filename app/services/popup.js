import Ember from 'ember';

export default Ember.Service.extend({
  open(url) {
    let promise = new Ember.RSVP.Promise((resolve, reject) => {
      let messageReceived = null;
      let timer = setInterval(checkChild, 500);
      let popup = window.open(url);

      window.onmessage = function (e) {
        messageReceived = true;
        popup.close();
        if (e.data) {
          resolve(e.data);
        } else {
          reject(e);
        }
      };

      function checkChild() {
        if (popup.closed) {
          clearInterval(timer);
          if (!messageReceived) {
            reject('popup closed before auth was granted');
          }
        }
      }
    });
    return promise;
  },
  complete(data) {
    window.opener.postMessage(data, '*');
  }
});
