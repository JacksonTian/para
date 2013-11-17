#!/usr/bin/env node

var fs = require('fs');
var path = require('path');
var ejs = require('ejs');
var marked = require('marked');
var combine = require('../lib/utils').combine;

var helpInfo = function () {
  console.log("Usage: para README.md README_en.md ...");
};

var argv = process.argv;
if (argv.length < 4) {
  helpInfo();
  return;
}

var files = argv.slice(2);
var l10ns = files.map(function (file) {
  return combine(fs.readFileSync(file, 'utf8').split('\n'));
});

var max = Math.max.apply(Math, l10ns.map(function (l10n) {
  return l10n.length;
}));

var tpl = fs.readFileSync(path.join(__dirname, '../lib/tpl.ejs'), 'utf8');

var html = ejs.render(tpl, {
  max: max,
  l10ns: l10ns,
  marked: marked
});

fs.writeFileSync('parallel.html', html);

console.log('Generate parallel page at: %s', path.resolve("parallel.html"));
