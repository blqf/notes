/* 
  1. 随机生成一个布尔值
  const result = Mock.Random.boolean()
  const result = Mock.Random.boolean(1, 2, true);
  2. 随机生成一个自然数
  const result = Mock.Random.natural()
  const result = Mock.Random.natural(0, 50)
  3. 随机生成一个整数
  const result = Mock.Random.integer()
  const result = Mock.Random.integer(0, 50)
  4. 随机生成一个小数
  const result = Mock.Random.float()
  5. 随机生成一个字符
  const result = Mock.Random.character()
  5. 随机生成一个字符串
  const result = Mock.Random.string()
*/

/*
  1. 属性值为字符串时，将字符串随机重复1-100遍
  Mock.mock({
    'name|1-100': 'feng';
  })
  2. 属性值为数字时，随机生成一个数，整数部分为1-100，小数部分为1-5位数，属性值仅仅表示数字
  Mock.mock({
    'name|1-100.1-5': 123;
  })；
  3. 属性值为Boolean值时，随机生成一个布尔值，属性值仅仅表示布尔值
  const a = Mock.mock({
    'name1|1': true
  })
  4. 属性值是对象时，随机从对象中取出1-100个属性
  const a = Mock.mock({
    'name1|1-100': { a: 1, b: 2, c: 3 }
  });
  5. 属性值是数组时，随机将数组的数据重复1-100次，固定为1时，随机选取一个数据作为最终值arr[n]，除1以外，其他都为重复数组
  const a = Mock.mock({
    'name1|1': [1, 2, 3, 4, 5]
  })
*/
