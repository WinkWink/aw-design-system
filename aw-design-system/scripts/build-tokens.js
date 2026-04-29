const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, '../tokens/figma-tokens.json');
const outputPath = path.join(__dirname, '../src/styles/tokens.css');

const tokens = JSON.parse(fs.readFileSync(inputPath, 'utf8'));

function resolveReference(value) {
  if (
    typeof value === 'string' &&
    value.startsWith('{') &&
    value.endsWith('}')
  ) {
    const refParts = value.slice(1, -1).split('.');

    if (refParts[0] === 'color') {
      refParts.shift();
    }

    return `var(--${refParts.join('-')})`;
  }

  return value;
}

function flattenTokens(obj, pathParts = []) {
  const lines = [];

  Object.entries(obj).forEach(([key, value]) => {
    if (value && typeof value === 'object' && '$value' in value) {
        const cleanParts = [...pathParts, key];

        if (cleanParts[0] === 'color') {
          cleanParts.shift();
        }
        
        const cssVariableName = `--${cleanParts.join('-')}`;      const cssValue = resolveReference(value.$value);

      lines.push(`  ${cssVariableName}: ${cssValue};`);
      return;
    }

    if (value && typeof value === 'object') {
      lines.push(...flattenTokens(value, [...pathParts, key]));
    }
  });

  return lines;
}

const css = `:root {
${flattenTokens(tokens).join('\n')}
}
`;

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, css);

console.log(`Generated ${outputPath}`);