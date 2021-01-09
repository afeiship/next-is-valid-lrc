/*!
 * name: @jswork/next-is-valid-lrc
 * description: Detete string is a valid lrc.
 * homepage: https://github.com/afeiship/next-is-valid-lrc
 * version: 1.0.1
 * date: 2021-01-09 16:11:02
 * license: MIT
 */

(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var LRC_RE = /\[.*\].+/;

  nx.isValidLrc = function (inString) {
    return LRC_RE.test(inString);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.isValidLrc;
  }
})();
