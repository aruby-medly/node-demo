// receive message from master process
process.on('message', (data) => {
  console.log('child process received message with data:', data);

  const fibonacci = (n) => {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  const result = fibonacci(data); 

  // send response to master process
  process.send(result);
});