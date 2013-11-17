var should = require('should');
var utils = require('../lib/utils');
var fs = require('fs');

describe('utils.js', function () {
  it('combineCode', function () {
    var fixture = fs.readFileSync(__dirname + '/fixtures/code.md', 'utf8').split('\n');
    utils.combineCode(fixture).should.eql([
      "## 安装",
      "### Node用户",
      "### For Node",
      "通过NPM安装即可使用：",
      "Install with NPM:",
      "```bash\n$ npm install eventproxy\n```",
      "",
      "调用:",
      "Usage:",
      "```js\nvar EventProxy = require('eventproxy');\n```",
      ""
    ]);
  });

  it('combineList', function () {
    var fixture = fs.readFileSync(__dirname + '/fixtures/list.md', 'utf8').split('\n');
    utils.combineList(fixture).should.eql([
      "haha",
      "",
      "- a\n- b\n- c",
      "",
      "hehe",
      "",
      "1. hehe\n2. haha\n3. fads",
      "",
      "bar",
      "",
      "* one\n* two",
      ""
    ]);
  });

  it('combineH1', function () {
    var fixture = fs.readFileSync(__dirname + '/fixtures/h1.md', 'utf8').split('\n');
    utils.combineH1(fixture).should.eql([
      "hehe\n========",
      "haha",
      ""
    ]);
  });

  it('combine', function () {
    var fixture = fs.readFileSync(__dirname + '/fixtures/all.md', 'utf8').split('\n');
    utils.combine(fixture).should.eql([
      "h1\n=====",
      "foo",
      "",
      "- foo\n- bar",
      "",
      "bar",
      "",
      "* foo\n* bar",
      "",
      "bar",
      "",
      "1. foo\n2. foo",
      "",
      "```\nfoo\nbar\n```",
      ""
    ]);
  });
});
