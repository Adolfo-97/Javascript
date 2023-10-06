function repeatHello(callback) {
  let id = setInterval(callback, 1000);
  setTimeout(() => clearInterval(id), 5500);
}

const printHello = () => console.log("hello");

repeatHello(printHello);
