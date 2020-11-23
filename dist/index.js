/*!
 * name: @jswork/next-is-valid-lrc
 * description: Detete string is a valid lrc.
 * homepage: https://github.com/afeiship/next-is-valid-lrc
 * version: 1.0.0
 * date: 2020-11-23 13:27:38
 * license: MIT
 */

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
