import {statSync} from 'fs';

async function main() {
  const {globby} = await import('globby');
  const paths = await globby(['./dist/*.js']);
  const totalSize = paths.reduce((total, path) => statSync(path).size + total, 0);
  console.log(`${(totalSize * 0.001).toFixed(2)} Kb`);
}

main();
