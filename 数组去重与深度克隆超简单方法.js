// 数组去重
function unique(arr, newArr = []) {
  return newArr = [...new Set(arr)];
}

//深度克隆
function deepClone(oldObj, newObj = {}) {
  return newObj = JSON.parse(JSON.stringify(oldObj));
}