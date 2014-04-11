#!/bin/bash

git checkout master
node index.js &
curl l:3000/foo > index.html
git add --all
git commit -m 'update'
git checkout gh-pages
git merge master
git push origin gh-pages
git checkout master
git push origin master
