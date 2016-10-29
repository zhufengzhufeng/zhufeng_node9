## 配置git
- 只需配置一次
```
git config --global user.name xxxx
git config --global user.email xxxx
git config --list
```
## 找到需要git所管理的文件夹
```
git init
git add ./-A /文件名
git commit -m ''
```

> 工作区 暂存区 历史区

## 查看历史区的版本
```
git log 
git reset --hard 版本id
git reflog
```

## 本次add退回上次的状态
```
git reset HEAD 文件
```

## 用暂存区或者版本库覆盖掉工作区
```
git checkout 文件名
```

## 比较
- 工作区和暂存区
```
git diff
```
- 暂存区和历史区
```
git diff --cached
```
- 工作区和历史区
```
git diff master
```

## 分支
- 创建分支
```
git branch dev
```
- 切换到分支上
```
git checkout dev
```
- 创建并切换
```
git checkout -b dev
```
- 删除分支
```
git branch -d dev
```

> 在dev提交了代码,需要切换到主干上，在主干上合并

## 合并分支
```
git merge dev a
git branch -d dev
```

## 提交到github静态页
- 创建一个gh-pages
- 将代码提交到gh-pages上
- 和远程仓库建立关系
```
git remote add 别名 地址
```
- 推送到远程仓库上
```
git push 别名 gh-pages
```

## 合并分支产生冲突
- 在主干的某个版本上进行分支开发，在分支上开发1.txt这个文件(drag)，在主干上也开发1.txt(limit),此时回到主干上合并时，会产生冲突，需要我们手动解决

## 从工作区中提交到历史区
```
git commit -a -m'drag'
```

## 解决冲突
去掉>>>>>> ========  <<<<<<< 保留需要的内容再次提交

## 合并
git rebase 变基
git cherry-pick 精选 

## 显示结构
```
git log --graph --oneline --decorate
```