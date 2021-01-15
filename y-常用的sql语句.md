[toc]
# 基础
## 增加数据
```
INSERT INTO `student`(stuno,`name`, birthday,phone,classid)
VALUES('500', '成哥', '1900-1-1', '13344445555', 2),
('501', '邓哥', '1900-1-2', '13344445556', 2);
```
## 删除数据
```
DELETE FROM student
WHERE `name` = '袁哥';
```
## 修改数据
```
UPDATE student SET `name` = '邓哥' 
WHERE id=12;
```
## case end 自定义某列显示的数据
```
select id, `name`, location,
case ismale
when 1 then '男'
else '女'
end as sex,
case
when salary > 15000 then '高'
when salary >= 8000 then '中'
else '低'
end as `级别`,
salary
FROM `employee`
where id < 5;
```
# 用于where语句中
## in (1,2,3) 查询属于1或2或3的项
```
select * from department
where companyId in (3);
```
## is NULL 查询为空的项
```
select * from employee
where location is NULL;
```
## between and
```
select * from employee
where salary between 10093.31 and 10108.17;
```
## like 模糊查询
```
select * from employee
where `name` like '袁_';
select * from employee
where `name` like '%袁%';
```
## and, or
```
select * from employee
where (id < 100 and salary > 19000 and ismale = 1)
or (birthday > '2000-1-1');
```
# 功能语句
## ORDER BY 排序
```
select * from employee
order by ismale asc, salary desc;
```
## LIMIT 分页(截取)
```
select * from employee
where id < 50
limit 2, 4;-- 跳过2个，取4个
```
## DISTINCT 去重
```
select DISTINCT location from employee
ORDER BY employee.location;
```
# 联表查询
## 笛卡尔积，量表相乘
```
select t1.name as 主场, t2.name as 客场 from team t1, team t2
where t1.id != t2.id;
```
## 左连接
```
select * from department as d left join employee as e
on d.id = e.deptId;
```
## 右连接
```
select * from department as d right join employee as e
on d.id = e.deptId;
```
## 内连接
```
select e.`name` as e_name, d.`name` as d_name, c.name as c_name from department as d
inner join employee as e
on d.id = e.deptId
inner join company as c
on d.companyId = c.id;
```
# 内置函数
## 内置数学函数
```
select ABS(-1);-- 绝对值
select CEIL(12.2);-- 向上取整
select FLOOR(12.7);-- 向下取整
select MOD(8,3);-- 取余
PI();-- 圆周率
select RAND();-- (0, 1)之间的随机数
select ROUND(2.5);-- 四舍五入
select ROUND(3.1415926,3);-- 四舍五入，并保留三位小数
select TRUNCATE(3.1415926,3);-- 保留三位小数，其余舍去
```
## 内置聚合函数
```
select AVG(salary) from employee;-- 求指定列的平均值
select MAX(salary) from employee;-- 求指定列的最大值
select MIN(salary) from employee;-- 求指定列的最小值
select COUNT(id) from employee;-- 查询指定列非null的个数
select SUM(salary) from employee;-- 求指定列的总和
```
## 内置字符函数
```
select CONCAT(`name`,salary) from employee;-- 多列字符连接成一列
select CONCAT_WS('+',`name`,salary) from employee;-- 多列字符连接成一列, 第一个参数为连接符
select TRIM('  dsaf   ds   ');-- 去掉字符串首部与尾部的所有空格
select LTRIM('  asdf asdf   ');-- 去掉字符串左边的空格
select RTRIM('  asdf asdf   ');-- 去掉字符串右边的空格
```
## 内置日期函数
```
select CURDATE(), CURRENT_DATE();-- 返回当前的日期
select CURTIME(), CURRENT_TIME();-- 返回当前的时间
select TIMESTAMPDIFF(HOUR,'2010-1-1 11:11:11','2010-1-2 11:11:11');-- 查询两个时间点之间的间隔时间
```
# 利用视图查询
```
select * from view_learn
where view_learn.e_name like '%李%';
```