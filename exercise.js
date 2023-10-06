function printAsyncName(name, callback) {
  setTimeout(callback, 1000);
  setTimeout(() => console.log(name), 2000);
}

const sayHello = () => console.log("Hello");

printAsyncName("Mario", sayHello);
// Esercizio in pair
