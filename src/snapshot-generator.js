const _ = require('lodash');

class SnapshotGenerator {
  generate(dic, service) {
    const ret = dic.findContainer(service);
    if (!ret.def) {
      throw new Error(`Instance ${service} not found`);
    }

    const def = ret.def;
    const node = {
      name: service,
      children: []
    };

    if (!def.params) {
      //console.log(def);//XXX
      return node;
    }

    for (const dep of def.params) {
      node.children.push(this.generate(def.container, dep));
    }

    return node;
  }
}

module.exports = SnapshotGenerator;
