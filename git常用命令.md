[toc]
# 本地操作
## 本地提交
git init // 初始化
git status // 查看当前文件的状态
git add . // 添加文件至暂存区
git commit -m <'注释'> // 提交版本到本地仓库

## 操作本地分支
### 增加
git branch <新建的分支名> // 新建分支
git checkout <切换到的分支名> // 切换到分支
git checkout -b <新建并切换到的分支名>  // 新建分支 并 切换到分支
### 删除
git branch -d <要删除的分支名> // 删除分支
### 改名
git branch -m <旧分支名> <新分支名> // 重命名本地分支
git branch -m <新的分支名> // 重命名当前分支名
### 查看
git branch // 查看本地分支
git branch -vv // 查看分支详细信息
### 合并
git merge <要合并过来的分支名dev> // 将dev分支合并到当前分支，属于本地操作


## 版本管理与修改撤销
### 查看版本信息
git log [--onelog] // 查看仓库中已提交的版本
git reflog // 查看日志记录
### 版本回退
git reset --hard HEAD~1  // 回退到上一个版本，~2表示回退上两个版本
git reset --hard <版本id> // 回退到指定版本，版本id可用git reflog查看
### 撤销工作区修改
git checkout -- <文件名或.> // 撤销工作区的修改，回退到与版本库中最近一次提交版本一致的状态
### 撤销暂存区修改
git reset HEAD -- <文件名或.> // 撤销暂存区中文件的修改

## 差异比较
git diff // 比较工作区与暂存区的差异
git diff HEAD // 比较工作区与版本仓库中最近一次版本的差异
git diff --cached // 比较暂存区与版本仓库中最近一次版本的差异
git diff <版本id> <版本id> // 比较两个版本之间的差异


# 远程操作
## 远程推送
git branch -M main // 修改当前分支名为main
git remote add origin <远程仓库GitHub地址> // 连接远程仓库
git push [-u] origin <要push到远端的分支名，如main> // 将指定分支推送到远程对应分支上，-u指定当前主机为默认主机，后面就可以直接使用git push将当前分支推送到默认主机

git push <远程主机名> <要推送的分支名> // 将某一分支推送到远程主机
git push origin // 将当前分支推送到origin主机的对应分支

## 操作远程分支
### 删除
git branch -d -r <要删除的分支名> // 删除远程分支，删除后还需推送到服务器
git push origin:<删除的分支名> // 删除后推送至服务器
### 查看
git branch -r // 查看远程分支
git branch -a // 查看本地及远程的所有分支
### 同步远程分支的更新
git fetch <远程主机名> <远程分支名> // 将远程指定分支的更新抓取到本地
git fetch <远程主机名> // 将远程所有分支的更新抓取到本地
git log -p FETCH_HEAD // 查看fetch过来分支的更新内容，以判断有无合并冲突
git merge origin/<要同步的分支名> // 将抓取到的分支合并到本地对应分支
>注：fetch命令 + merge命令，这两个命令一起使用，才能完成本地与远程更新的同步
### 拉取远程指定分支到本地
git checkout -b 新建分支名dev1 origin/远程分支名dev1 // 创建新分支并与远程某一指定分支形成映射<=>拉取远程某一指定分支到本地

git pull origin <分支名> // 将远程仓库指定分支(一般为main)的更新直接同步到本地仓库对应分支(一般为main)上
>注：
pull命令直接能完成本地与远程更新的同步
pull命令 = fetch命令 + merge命令
# 其他
git remote -v // 查看连接的远程仓库
ssh-keygen // 生成非对称密钥，用于GitHub上跳过密码验证
