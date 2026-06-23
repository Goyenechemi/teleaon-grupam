const fs = require('fs');

let css = fs.readFileSync('src/index.css', 'utf-8');
css = css.replace('.sc__desc {\n  font-family: "Hanken Grotesk", sans-serif;', '.sc__desc {\n  font-family: "Hanken Grotesk", sans-serif;\n  text-align: justify;');
fs.writeFileSync('src/index.css', css);
