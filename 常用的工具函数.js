// 判断数据类型
function dataType(data) {
  return Object.prototype.toString.call(data).match(/\[object (.*)\]/)[1].toLowerCase();
}

// 数组去重
function uniqueArr(arr, newArr = []) {
  return newArr = [...new Set(arr)];
}

//深度克隆对象
function deepClone(oldObj, newObj = {}) {
  return newObj = JSON.parse(JSON.stringify(oldObj));
}
