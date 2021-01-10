(function (modules) {
  const huancun = {};//存放缓存
  //__webpack_require是运行一个模块，并返回模块的导出结果
  function __webpack_require(moduleId) {
    if (huancun[moduleId]) {
      return huancun[moduleId];
    }
    const fn = modules[moduleId];
    const module = {
      exports: {}
    }
    fn(module, module.exports, __webpack_require);
    const result = module.exports;
    huancun[moduleId] = result;
    return result;
  }
  __webpack_require("./src/index.js");
}({
  "./src/index.js": function (module, exports, __webpack_require) {
    const a = __webpack_require('./src/a.js');
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
