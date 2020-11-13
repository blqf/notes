(function (modules) {
  const huancun = {};//存放缓存
  //require是运行一个模块，并返回模块的导出结果
  function require(moduleId) {
    if (huancun[moduleId]) {
      return huancun[moduleId];
    }
    const fn = modules[moduleId];
    const module = {
      exports: {}
    }
    fn(module, module.exports, require);
    const result = module.exports;
    huancun[moduleId] = result;
    return result;
  }
  require("./src/index.js");
}({
  "./src/index.js": function (module, exports, require) {
    const a = require('./src/a.js');
    console.log('this is index', a);
  },
  "./src/a.js": function (module, exports) {
    console.log('this is a');
    module.exports = {
      name: 'feng',
      age: 22
    }
  }
}))
