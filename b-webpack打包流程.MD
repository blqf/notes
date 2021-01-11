# webpack编译过程
1. 初始化.
  webpack将cli参数。配置文件。默认配置进行融合，形成一个终极配置对象
  融合的过程是靠带三方库yargs完成的。
2. 编译。
  1. 创建chunk(通过某个入口找到所有依赖的统称)

  2. 构建所有的依赖模块(这一过程的目的就是生成依赖模块列表)
    1. 检查模块记录->
    2. 读取未记录文件的内容,并对其进行抽象语法树分析(目的是找到这个文件的依赖)->
    3. 将Ⅱ分析到的文件依赖保存到dependencies(一个里面是字符串的数组,数组内容为模块依赖的唯一路径)->
    4. 转换代码(将文件里的依赖路径替换成dependencies中的唯一路径)->
    5. 将转换后的代码保存到模块记录里面->
    6. 看dependencies中有没有其他依赖,有的话就回到1(检查模块记录)进行递归.
3. 输出。
  webpack利用node中的fs模块(文件处理模块),根据编译产生的assets(资源列表),生成相应的文件(将各个链子合并成一个大链子)

# 各种hash值的意义
1. hash: 总的资源清单的hash值
2. chunkhash: 各个chunk的hash值
3. chunkname: 各个chunk的名字

# loader与plugin的区别
1. loader的本质是一个“函数”,传入源代码,返回处理后的代码
2. plugin的本质是一个带有apply方法的“对象”

>注：wepback.config.js之所以要用module.exports(commonJS)方式导出，而不可以用export defult(ES6)方式导出，是因为webpack.config.js里的代码在编译过程中时要参与运行的，而编译的过程是在node环境下进行的，所以必须用CommonJS方式导出
