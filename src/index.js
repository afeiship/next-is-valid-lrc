(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var LRC_RE = /\[.*\].+/;

  nx.isValidLrc = function (inString) {
    return LRC_RE.test(inString);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.isValidLrc;
  }
})();
