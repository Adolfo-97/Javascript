const number = 15;

let ourPromise = new Promise((resolve, reject) => {
  if (number > 10) {
    resolve(number);
  } else {
    reject(number);
  }
});

ourPromise
  .then((number) => console.log(number))
  .catch((err) => console.error(`${number} è inferiore a 10`));
