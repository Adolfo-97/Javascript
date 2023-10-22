const user = {
  id: 1,
  name: "John",
  age: 25,
};

function saveUser(userToJSON) {
  try {
    localStorage.setItem("user",JSON.stringify(userToJSON));
    //console.log(userToJSON)
  } catch (err) {
    console.error(err);
  }
}


function loadUser(userToString){
  let user = localStorage.getItem(userToString)
  console.log(user);
}
saveUser(user);

loadUser("user")