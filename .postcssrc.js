//添加浏览器私缀（私缀是上世纪90年代浏览器大战的产物，也是现在新型浏览器支持某些新API，而其它浏览器不支持的证明！）
// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},// 用于@import导入css文件
    "postcss-url": {},// 路径引入css文件或node_modules文件
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {}// 编辑目标浏览器：使用package.json中的“browserslist”字段
  }
}
