async function toDo(){
    const response = await fetch("https://jsonplaceholder.typicode.com/todos")
    const data =  await response.json()
    const div = document.querySelector("#container")
    const ul = document.createElement("ul");
    console.log(data)
    data.forEach(element => {
      const li = document.createElement("li");
      const title = element.title;
      li.innerText = title;
      ul.append(li);
    });
    container.append(ul)
}

toDo()