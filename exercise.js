  const user = {
    id: 1,
    name: "John",
    age: 25,
  };

  function saveUser(userToJSON) {
    try {
      localStorage.setItem(JSON.stringify(userToJSON));
      //console.log(userToJSON)
    } catch (err) {
      console.error(err);
    }
  }
  
  saveUser(user);