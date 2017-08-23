const expect = require('chai').expect;
const {Dic} = require('@kapitchi/bb-dic');
const JsonGenerator = require('./json-generator');

class App {
  constructor(myService, otherService) {}
}

class MyService {
  constructor(package_packageService) {}
}

class OtherService {}

class PackageService {
}

describe('JsonGenerator', () => {
  beforeEach(function () {
    this.ins = new JsonGenerator();
  });

  describe('#generate()', () => {
    it('some', function() {
      const dic = new Dic();

      dic.class('app', App);
      dic.class('myService', MyService);
      dic.class('otherService', OtherService);

      const packageDic = new Dic();
      packageDic.class('packageService', PackageService);

      dic.bind(packageDic, {
        name: 'package'
      });

      const ret = this.ins.generate(dic, 'app');
      console.log(JSON.stringify(ret, null, 2));//XXX
    })
  });

});
