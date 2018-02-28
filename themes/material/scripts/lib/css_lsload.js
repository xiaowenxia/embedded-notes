'use strict';

var path_for = require("./path_for");
var get_file_hex = require("./get_file_hex");
var fs = require('fs');

function cssHelper() {
  var result = '';
  var path = '';
  var key = ''

  for (var i = 0, len = arguments.length; i < len; i++) {
    if (typeof arguments[i] === 'string'){
      path = arguments[i];
      key = path;
    }else{
      path = arguments[i].path;
      key = arguments[i].key
    }

    if (i) result += '\n';

    if (Array.isArray(path)) {
      result += jsHelper.apply(this, path);
    } else {
      if (path.indexOf('?') < 0 && path.substring(path.length - 4, path.length) !== '.css') path += '.css';
      var localpath = path_for.call(this,path);
      result += '<style id="' + key + '"></style><script>if(typeof window.lsLoadCSSMaxNums === "undefined")window.lsLoadCSSMaxNums = 0;' +
        'window.lsLoadCSSMaxNums++;' +
        'lsloader.load("' + key + '","' +
        require("../../../../node_modules/hexo/lib/plugins/helper/url_for").call(this,path) + 
        (fs.existsSync(localpath)?'?' + get_file_hex(localpath):'') + '",function(){if(typeof window.lsLoadCSSNums === "undefined")window.lsLoadCSSNums = 0;' +
        'window.lsLoadCSSNums++;' +
        'if(window.lsLoadCSSNums == window.lsLoadCSSMaxNums)document.documentElement.style.display="";' +
        '})</script>'
    }
  }
  return result;
}

module.exports = cssHelper;