var path = require('path');
var fs = require('fs');

function pathFor(paths) {
  var res = "";
  res = path.join(this.theme_dir,"source" , paths);
  if(!fs.existsSync(res)){
    res = path.join(this.source_dir, paths);
  }
  return res;
}

module.exports = pathFor;