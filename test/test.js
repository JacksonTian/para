var should = require('should');
var utils = require('../utils');
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
});
