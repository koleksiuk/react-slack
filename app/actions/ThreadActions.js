var Reflux = require('reflux');

var ThreadActions = Reflux.createActions([
  "addMessage" // {userId, body}
]);

module.exports = ThreadActions
