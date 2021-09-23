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

// 防抖
function debounce(func, duration = 1000) {
  let timer;
  return (...rest) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...rest);
    }, duration);
  };
}

// 节流
function throttle(func, duration = 1000) {
  let key = true;
  return (...rest) => {
    if (!key) return;
    key = false;
    func(...rest);
    setTimeout(() => {
      key = true;
    }, duration);
  };
}
