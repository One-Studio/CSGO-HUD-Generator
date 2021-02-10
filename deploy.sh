#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd ./dist

# 生成CNAME
touch CNAME
echo hud.hlae.site > CNAME

git init
git config --global user.name "Purple-CSGO"
git config --global user.email "438518244@qq.com"
git add -A
git commit -m '手动部署'

# 如果发布到 https://<USERNAME>.github.io
git remote add origin git@github.com:One-Studio/One-Studio.github.io.git

# https://FebQltwcIW:9335b52e82cece10aa0cd126e2917875de881211@e.coding.net/tediorelee/tediorelee.git

git push -u --force origin master

cd -
