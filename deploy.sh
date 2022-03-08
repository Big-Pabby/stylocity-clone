#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://Big-Pabby.github.io
# git push -f git@github.com:Big-Pabby/Big-Pabby.github.io.git main

# if you are deploying to https://Big-Pabby.github.io/stylocity-clone
git push -f git@github.com:Big-Pabby/stylocity-clone.git main:gh-pages

cd -