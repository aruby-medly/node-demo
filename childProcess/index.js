const { fork } = require('child_process');
const path = require('path');

const useForkedFibonacci = (n) => {
  const fibonacciProcess = fork(path.resolve(__dirname, './calcFibonacci.js'));
  
  console.log('sending message to child process');
  fibonacciProcess.send(n);

  fibonacciProcess.on('message', (result) => {
    console.log(`The ${n}th Fibonacci number is ${result}`);
  });

  console.log('main thread of execution continues');
}

const doOtherStuff = () => {
  console.log('can continue to do more stuff');
}

useForkedFibonacci(40);
doOtherStuff();
useForkedFibonacci(10);


