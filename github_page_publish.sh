echo 'install angular-cli-ghpages'
npm i angular-cli-ghpages --save

echo 'npm install'
npm i

echo 'build and publish www to https://nthung2411.github.io/ionic-swipe-tab-navigator/'
ionic build --prod -- --base-href https://nthung2411.github.io/ionic-swipe-tab-navigator/

echo 'publish branch gh-pages'
npx angular-cli-ghpages --dir=www

echo 'published finish, please update SETTINGS to use branch gh-pages for github page'