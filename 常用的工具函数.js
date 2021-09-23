function dataType(data) {
  return Object.prototype.toString.call(data).match(/\[object (.*)\]/)[1].toLowerCase();
}
