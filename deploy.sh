#!/bin/bash

set -e

# build
echo Linting..
npm run build

cd dist

echo Deploying..
git init
git add -A
git commit -m 'deploy'

# deploy
git push -f git@github.com:augmentary/augmentary.github.io.git master

cd ..
