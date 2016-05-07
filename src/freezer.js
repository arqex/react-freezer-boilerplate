import Freezer from 'freezer-js';


var freezer = new Freezer({});

window.hub = freezer.getEventHub();

module.exports = freezer;
