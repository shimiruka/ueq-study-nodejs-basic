import { totalmem } from 'os';

export const getTotalMemoryInMB = () => {
  const memory = totalmem();
  return Math.floor(memory / 1024 / 1024);
};

const main = () => {
  const totalMemoryInMB = getTotalMemoryInMB();
  console.log(`Total memory: ${totalMemoryInMB} MB`);
};

main();
