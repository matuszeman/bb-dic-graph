const expect = require('chai').expect;
const SnapshotGenerator = require('./snapshot-generator');
const MdPrinter = require('./md-printer');
const {dic} = require('../test/fixtures/dic');

describe('MdPrinter', () => {
  beforeEach(function () {
    this.generator = new SnapshotGenerator();
    this.printer = new MdPrinter();
  });

  describe('#print()', () => {
    it('some', function() {
      const graph = this.generator.generate(dic, 'app');
      const ret = this.printer.print(graph);
      console.log(ret);//XXX
    })
  });

});
