'use strict';

var path_for = require("./path_for");
var get_file_hex = require("./get_file_hex");

function jsHelper() {
  var result = '';
  var path = '';

  for (var i = 0, len = arguments.length; i < len; i++) {
    path = arguments[i];

    if (i) result += '\n';

    if (Array.isArray(path)) {
      result += jsHelper.apply(this, path);
    } else {
      if (path.indexOf('?') < 0 && path.substring(path.length - 3, path.length) !== '.js') path += '.js';
      result += '<script src="' + require("../../../../node_modules/hexo/lib/plugins/helper/url_for").call(this,path) + '?' + get_file_hex(path_for.call(this,path)) + '"></script>';
    }
  }

  return result;
}

module.exports = jsHelper;