// build.js
var _ = require('lodash')
var fs = require('fs')
var parseColors = require('./parse-colors')
var parseCombos = require('./parse-combos')

var css = fs.readFileSync('./docs/tachyons-colors.css', 'utf8')
// Read the template string
var template = fs.readFileSync('./template/index.html', 'utf8')
// Create a lodash template function
var tpl = _.template(template)
var colors = parseColors(css)
var combos = parseCombos(colors)

// Render the template function to an HTML string
var html = tpl({
  colors: colors,
  combos: combos
})

// Write an HTML file to disk
fs.writeFileSync('./docs/index.html', html)
