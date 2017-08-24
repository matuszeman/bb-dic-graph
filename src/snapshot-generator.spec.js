const expect = require('chai').expect;
const SnapshotGenerator = require('./snapshot-generator');
const {dic} = require('../test/fixtures/dic');

describe('SnapshotGenerator', () => {
  beforeEach(function () {
    this.ins = new SnapshotGenerator();
  });

  describe('#generate()', () => {
    it('creates JSON graph', function() {
      const ret = this.ins.generate(dic, 'app');
      console.log(JSON.stringify(ret, null, 2));//XXX
    })
  });

});
