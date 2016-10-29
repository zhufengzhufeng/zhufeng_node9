## 配置使用人的账号和邮箱
```
git config --global user.name zhufengzhufeng
git config --global user.email xxxxx
git config --list 查看所有配置
```
## cd命令
change directory
## clear清屏
mkdir 创建目录
## 初始化git
```
git init
```
## 初始化文件
```
echo hello > index.txt
```

> 一个大于号表示清空并写入 >> 表示 追加

## 删除文件rm

## 查看状态
```
git status
``` 
## 将文件加入到暂存区中
```
git add file
git add ./git add -A
```
## 提交commit
```
git commit -m"first"
```
## vi控制台
如果进入编辑模式可以i键进入插入模式

- i表示编辑
- 退出esc + :wq

## 查看版本库信息
```
git log --oneline
```