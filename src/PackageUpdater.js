const fs = require('fs');

const snippetsDir = './snippets';

const snippetFiles = fs.readdirSync(snippetsDir);

const snippets = snippetFiles.map(file => ({
    language: "java",
    path: `${snippetsDir}/${file}`
}));

const data = fs.readFileSync('package.json');
const json = JSON.parse(data);

json.contributes.snippets = snippets;

const out = fs.createWriteStream('package.json');
out.write(JSON.stringify(json, null, 4));
out.end();
