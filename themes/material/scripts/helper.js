hexo.extend.helper.register('jsHex', function(){
  return require("./lib/js_hex.js").call(hexo,...arguments);
});

hexo.extend.helper.register('jsLsload', function(){
  return require("./lib/js_lsload.js").call(hexo,...arguments);
});

hexo.extend.helper.register('cssLsload', function(){
  return require("./lib/css_lsload.js").call(hexo,...arguments);
});