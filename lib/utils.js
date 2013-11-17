exports.combine = function (segments) {
  return exports.combineH1(exports.combineList(exports.combineCode(segments)));
};

exports.combineH1 = function (segments) {
  var ret = [];
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment.indexOf('==') === 0) {
      if (ret.length) {
        ret[ret.length - 1] = [ret[ret.length - 1], segment].join('\n');
      }
    } else {
      ret.push(segment);
    }
  }
  return ret;
};

exports.combineCode = function (segments) {
  var ret = [];
  var line = [];
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (line.length) {
      line.push(segment);
      if (segment.indexOf('```') === 0) {
        ret.push(line.join('\n'));
        line = [];
      }
    } else {
      if (segment.indexOf('```') === 0) {
        line.push(segment);
      } else {
        ret.push(segment);
      }
    }
  }
  return ret;
};

exports.combineList = function (segments) {
  var ret = [];
  var line = [];
  var reg = /^\s*(\*|\-|\d\.)\s/i;
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (reg.test(segment)) {
      line.push(segment);
    } else {
      if (line.length) {
        ret.push(line.join('\n'));
        line = [];
      }
      ret.push(segment);
    }
  }
  return ret;
};
