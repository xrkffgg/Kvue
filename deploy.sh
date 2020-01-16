set -e
yarn build

cd ..
rm -rf xrkffgg.github.io/Kvue/
cp -a Kvue/Kvue/ xrkffgg.github.io/Kvue/

cd xrkffgg.github.io/
git add -A
git commit -m 'auto: Kvue'
git push origin master