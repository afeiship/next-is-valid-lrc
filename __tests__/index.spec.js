(function () {
  require('../src');

  require('@jswork/next-fs-read');

  describe('api.basic test', () => {
    test('nx.isValidLrc', function () {
      const list = nx.fsRead('./__tests__/E202.lrc', { charset: 'gbk', responseType: 'array' });
      const res = {
        truthy: [],
        falsy: []
      };

      list.forEach((item) => {
        const value = nx.isValidLrc(item);
        const target = value ? 'truthy' : 'falsy';
        res[target].push(value);
      });

      expect(res.truthy.length).toBe(28);
      expect(res.falsy.length).toBe(6);
    });
  });
})();
