const { workerData, parentPort } = require('worker_threads');

// ! could send multiple messages here indicating the status of the execution, or send partial results as they're available
// ! ex: processing thousands of images and wanting to send a message for each image processed, but don't want to wait until all images have been processed to start


const workerFunction = (data) => {
  console.log('data received', data);

  const fibonacci = (n) => {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  };

  const nthFibonacci = fibonacci(data);


  parentPort.postMessage(nthFibonacci);
}

workerFunction(workerData);

