'use strict';

var path_for = require("./path_for");
var get_file_hex = require("./get_file_hex");
var fs = require('fs');

function jsHelper() {
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
      if (path.indexOf('?') < 0 && path.substring(path.length - 3, path.length) !== '.js') path += '.js';
      var localpath = path_for.call(this,path);
      result += '<script>lsloader.load("' + key + '","' +
        require("../../../../node_modules/hexo/lib/plugins/helper/url_for").call(this,path) +
        (fs.existsSync(localpath)?'?' + get_file_hex(localpath):'') + '")</script>'
    }
  }
  return result;
}

module.exports = jsHelper;