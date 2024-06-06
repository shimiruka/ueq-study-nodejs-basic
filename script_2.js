import { readFile } from 'fs/promises';

export const main = async () => {
  const csvPath = "./seiseki.csv";
  const content = await readFile(csvPath, 'utf-8');
  console.log(content);
};

main();
