const isLogged = true;

let primaPromise = new Promise((resolve, reject) => {
  if (isLogged == true) {
    resolve(Math.random());
  } else {
    reject("Not logged");
  }
});

const result = (number) => {
  return (secondaPromise = new Promise((resolve, reject) => {
    if (number > 0.5) {
      resolve({ name: "John", age: 24 });
    } else {
      reject("Not valid");
    }
  }));
};

primaPromise
  .then((randomNumber) => result(randomNumber))
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
