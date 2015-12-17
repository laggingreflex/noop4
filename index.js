
/*!
 * proot
 * @license MIT
 */

/*
 * Module dependencies
 */

var fs = require('fs');
var path = require('path');

/*
 * Module variables
 */

var sep = path.sep;
var deps = sep + 'node_modules' + sep;

/*
 * Module
 */

function resolve (cwd) {
  var dirname = cwd ? process.cwd() : __dirname;
  var index = dirname.indexOf(deps);
  var parts = (index === -1 ? dirname : dirname.slice(0, index)).split(sep);
  var root;

  while (parts.length) {
    root = parts.join(sep);
    if (fs.existsSync(path.join(root, 'package.json'))) break;
    parts.pop();
  }

  return root;
}

/*
 * Module exports
 */

module.exports = resolve;
