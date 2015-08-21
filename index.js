var fs = require('fs')
var babel = require('babel')

var installed = false

function install(options) {
  if (installed) {
    return
  }

  options = options || {}

  require.extensions[options.extension || '.jsx'] = function(module, filename) {
    var src = fs.readFileSync(filename, {
      encoding: 'utf8'
    })

    src = babel.transform(src, options).code
    module._compile(src, filename)
  }

  installed = true
}

module.exports = {
  install: install
}
