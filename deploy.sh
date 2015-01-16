#!/bin/bash
set -ev
git clone -q https://${GIT_NAME}:${GH_TOKEN}@github.com/Vegosvar/Mjolken.git gh-pages
npm install less
git config --global user.name ${GIT_NAME}
git config --global user.email ${GIT_EMAIL}
git config --global push.default simple
git checkout master
sha=$(git rev-parse HEAD)
cd gh-pages
git checkout gh-pages
rm -rf assets/
rm -rf *.html
cd ..
cp -rf assets/ gh-pages/assets
rm -r gh-pages/assets/css/*.less
cp -rf *.html gh-pages
cp -rf favicon.ico gh-pages
./node_modules/less/bin/lessc assets/css/style.less > gh-pages/assets/css/style.css
cd gh-pages
touch .nojekyll
git add --all .
git commit -m 'Updating to Vegosvar/Mjolken@'${sha}
git push origin gh-pages -q