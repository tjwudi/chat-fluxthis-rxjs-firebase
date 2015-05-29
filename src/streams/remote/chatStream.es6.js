const Rx = require('rx');
const dbRef = require('lib/db');
export default Rx.Observable.create((observer) => {
  var newItems = false;
  dbRef.on('child_added', function(snapshot) {
    if (!newItems) return;
    observer.onNext(snapshot.val());
  });
  dbRef.once('value', function(messages) {
    newItems = true;
  });
});
