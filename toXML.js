/**
 * @private
 */
function toXML(name, value) {
  if (typeof name === 'object') {
    value = name;
    name = null;
  }
  if (Array.isArray(value)) {
    return value.map(function(v) { return toXML(name, v); }).join('');
  } else {
    var attrs = [];
    var elems = [];
    if (typeof value === 'object') {
      for (var k in value) {
        var v = value[k];
        if (k[0] === '@') {
          k = k.substring(1);
          attrs.push(k + '="' + v + '"');
        } else {
          elems.push(toXML(k, v));
        }
      }
      value = elems.join('');
    } else {
      value = String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
    }
    var startTag = name ? '<' + name + (attrs.length > 0 ? ' ' + attrs.join(' ') : '') + '>' : '';
    var endTag = name ? '</' + name + '>' : '';
    return  startTag + value + endTag;
  }
}
module.exports = toXML