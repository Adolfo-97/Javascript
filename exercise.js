let numberStore = [0, 1, 2];
let newNumber = 3;
// numberStore.push(newNumber);

function merge(newNumber, numberStore) {
  let merged = [...numberStore, newNumber];
  return merged;
}
console.log(merge(newNumber, numberStore));
