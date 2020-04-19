const fs = require('fs');

const snippetsDir = './snippets';

const getCategoryName = file => `${file.charAt(0).toUpperCase()}${file.replace('-', ' ').substring(1, file.indexOf('.json'))}`;

const snippetFiles = fs.readdirSync(snippetsDir);

let snippetsInfo = '';

// Build the category index
snippetFiles.forEach((file, index) => {
    const categoryName = getCategoryName(file);
    const categoryAnchor = categoryName.replace(' ', '-').toLowerCase();

    snippetsInfo += `${index + 1}. [${categoryName}](#${categoryAnchor})\n`;
});

snippetsInfo += `\n\n`;

// Build the categories description
snippetFiles.forEach(file => {
    const data = fs.readFileSync(`${snippetsDir}/${file}`);
    const snippets = JSON.parse(data);

    const categoryName = getCategoryName(file);

    snippetsInfo += `### ${categoryName}\n\n`;
    snippetsInfo += '| **Prefixes** | **Description** |\n';
    snippetsInfo += '| ------------ | ---------------- |\n';

    for (let key in snippets) {

        let snippet = snippets[key];
        let prefix = ((snippet.prefix instanceof Array) ? snippet.prefix.join(', ') : snippet.prefix);

        snippetsInfo += `| ${prefix} | ${snippet.description} |\n`;
    }
    snippetsInfo += '\n';
});

// Build the README.md file
const readmeTemplate = fs.readFileSync('src/README.template.md');
const readme = readmeTemplate.toString().replace("${snippets}", snippetsInfo);

const out = fs.createWriteStream('README.md');
out.write(readme);
out.end();
