const { Worker } = require('worker_threads');

const runService = (workerData) => {
  return new Promise((resolve, reject) => {
    const worker = new Worker(`${__dirname}/myWorker.js`, { workerData }); // * NOTE: workerData is cloned, not in any shared memory
    worker.on('message', resolve);
    worker.on('error', reject);
    worker.on('exit', (code) => {
      if (code !== 0) {
        reject(new Error(`Worker stopped with exit code ${code}`));
      }
    })
  })
}

const run = async (n) => {
  const result = await runService(n);
  console.log(`The ${n}th Fibonacci number is ${result}`);
}

run(40).catch(err => console.error(err));
run(10).catch(err => console.error(err));

console.log('main thread continues');
