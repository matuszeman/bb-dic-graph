const {Dic} = require('@kapitchi/bb-dic');

class App {
  constructor(myService, otherService) {}
}

class MyService {
  constructor(package_packageService) {}
}

class OtherService {}

class PackageService {
}

const dic = new Dic();

dic.class('app', App);
dic.class('myService', MyService);
dic.class('otherService', OtherService);

const packageDic = new Dic();
packageDic.class('packageService', PackageService);

dic.bind(packageDic, {
  name: 'package'
});

module.exports = {
  dic
};
