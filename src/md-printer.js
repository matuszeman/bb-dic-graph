const _ = require('lodash');

class MdPrinter {
  print(snapshot) {
    return this.printNode(snapshot, 0);
  }

  printNode(node, level) {
    const ret = [_.repeat(' ', level * 2) + `* ${node.name}`];
    for (const child of node.children) {
      ret.push(this.printNode(child, level + 1));
    }
    return ret.join("\n");
  }
}

module.exports = MdPrinter;
