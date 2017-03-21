var fs = require('fs');
var cssscss = require('css-scss');

var src = fs.readFileSync('./src/tachyons-colors.css', 'utf8');
var scss = cssscss(src);

fs.writeFileSync('./tachyons-colors-variables.scss', scss);
