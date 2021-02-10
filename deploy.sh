#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd .vuepress/dist

# 生成CNAME
touch CNAME
echo hud.hlae.site > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
git remote add origin git@github.com:One-Studio/One-Studio.github.io.git

# https://FebQltwcIW:9335b52e82cece10aa0cd126e2917875de881211@e.coding.net/tediorelee/tediorelee.git

git push -u --force origin master

cd -
