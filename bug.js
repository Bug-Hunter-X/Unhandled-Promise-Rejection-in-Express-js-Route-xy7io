const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Asynchronous operation (e.g., database query)
  someAsyncOperation().then(result => {
    res.send(result);
  }).catch(err => {
    console.error(err);
    // Missing error handling here!  The response is never sent if an error occurs
  });
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation
    setTimeout(() => {
      // Simulate a success or failure
      Math.random() > 0.5 ? resolve('Success!') : reject('Failure!');
    }, 1000);
  });
}

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});