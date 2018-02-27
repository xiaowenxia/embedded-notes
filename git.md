# 目录
## 说明
git操作笔记

### 添加文件
```sh
git add .
```
### 删除文件
```sh
git rm .
```
### 提交改动到本地
```sh
git commit -m "first commit"
```
### 上传改动到服务器
```sh
git push
```
### 列出当前分支
```sh
git branch
```
### 列出所有分支，包括远程分支
```sh
git branch -a
```
### 从已有的分支创建新的分支(如从master分支),创建一个dev分支
```sh
git checkout -b dev
```
### 从服务器拉取分支到本地分支
```sh
git pull origin gh-pages:gh-pages
```
> 需要本地没有gh-pages分支，否则会提示已拒绝
### 上传本地分支到远程分支
```sh
git branch --set-upstream-to=gh-pages
git push origin gh-pages
```
