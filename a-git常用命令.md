[toc]
# 本地操作
## 本地提交
1. git init // 初始化
2. git status // 查看当前文件的状态
3. git add . // 添加文件至暂存区
4. git commit -m <'注释'> // 提交版本到本地仓库

## 操作本地分支
### 增加
1. git branch <新建的分支名> // 新建分支
2. git checkout <切换到的分支名> // 切换到分支
3. git checkout -b <新建并切换到的分支名>  // 新建分支 并 切换到分支
### 删除
1. git branch -d <要删除的分支名> // 删除分支
### 改名
1. git branch -m <旧分支名> <新分支名> // 重命名本地分支
2. git branch -m <新的分支名> // 重命名当前分支名
### 查看
1. git branch // 查看本地分支
2. git branch -vv // 查看分支详细信息
### 合并
1. git merge <要合并过来的分支名dev> // 将dev分支合并到当前分支，属于本地操作


## 版本管理
### 查看版本信息
1. git log [--oneline] // 查看仓库中已提交的版本
2. git reflog // 查看日志记录
### 版本回退
1. git reset --hard HEAD~1  // 硬回退，直接删除回退内容，回退到上一个版本，~2表示回退上两个版本
2. git reset --soft HEAD~1  // 软回退，将内容回退至暂存区，回退到上一个版本，~2表示回退上两个版本
3. git reset --hard <版本id> // 回退到指定版本，版本id可用git reflog查看

## 撤销修改
### 撤销工作区修改
1. git checkout <文件名或.> // 撤销工作区的修改，回退到与版本库中最近一次提交版本一致的状态
### 撤销暂存区修改
1. git reset HEAD <文件名或.> // 撤销暂存区中文件的修改

## 差异比较
1. git diff // 比较工作区与暂存区的差异
2. git diff HEAD // 比较工作区与版本仓库中最近一次版本的差异
3. git diff --cached // 比较暂存区与版本仓库中最近一次版本的差异
4. git diff <版本id> <版本id> // 比较两个版本之间的差异


# 远程操作
## 远程克隆
1. git clone 远程仓库地址 // 将远程仓库克隆到本地
2. git branch -r | grep -v '\->' | while read remote; do git branch --track "${remote#origin/}" "$remote"; done // 获取所有远程分支并映射到本地
>注：2必须在1的基础上才能完成

## 远程推送
1. git branch -M main // 修改当前分支名为main
2. git remote add origin <远程仓库GitHub地址> // 连接远程仓库
3. git push [-u] origin <要push到远端的分支名，如main> // 将指定分支推送到远程对应分支上，-u指定当前主机为默认主机，后面就可以直接使用git push将当前分支推送到默认主机

1. git push <远程主机名> <要推送的分支名> // 将某一分支推送到远程主机
2. git push origin // 将当前分支推送到origin主机的对应分支

## 操作远程分支
### 删除
1. git branch -d -r <要删除的分支名> // 删除远程分支，删除后还需推送到服务器
2. git push origin:<删除的分支名> // 删除后推送至服务器
### 查看
1. git branch -r // 查看远程分支
2. git branch -a // 查看本地及远程的所有分支
### 同步远程分支的更新
1. git pull origin <分支名> // 将远程仓库指定分支合并至当前分支 
2. git merge origin <分支名> // merge合并，merge时，当前更改为我的更改
3. git rebase origin <分支名> // rebase合并，rebase时，传入更改为我的更改

### 拉取远程指定分支到本地
1. git checkout -b 新建分支名dev1 origin/远程分支名dev1 // 创建新分支并与远程某一指定分支形成映射
# 其他
1. git remote -v // 查看连接的远程仓库
2. ssh-keygen // 生成非对称密钥，用于GitHub上跳过密码验证
