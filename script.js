function mockCheck(success = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve('Operation was successful!');
      } else {
        reject('Operation failed.');
      }
    }, 2000);
  });
}

mockCheck(true)
  .then(message => {
    console.log('Success:', message);
    return mockCheck(false);
  })
  .then(message => {
    console.log(
      'This message will not be logged if the previous Promise failed:',
      message
    );
  })
  .catch(error => {
    console.error('Error:', error);
  })
  .finally(() => {
    console.log('Done!');
  });
