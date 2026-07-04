const fs = require('fs');
const path = require('path');
const dir = './src/assets';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.json'));
for (const f of files) {
  const p = path.join(dir, f);
  let c = fs.readFileSync(p, 'utf8');
  c = c.replace(/"url":\s*"\/__l5e\/assets-v1\/[^\/]+\/([^"]+)"/g, '"url": "/assets/$1"');
  fs.writeFileSync(p, c);
  console.log('Fixed', f);
}
