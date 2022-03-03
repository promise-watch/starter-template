const { ConsoleNotifier } = require("@promise-watch/core");

module.exports = {
    notifiers: [
        new ConsoleNotifier(),
    ]
};
