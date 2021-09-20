

function nav(){
  const navbar = document.createElement("div");
  const ul = document.createElement("ul")
  let arr = ["Menu","Drinks","Contacts"]
  for(let i = 0; i < 3; i++){
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.innerText = arr[i];
    li.appendChild(a)
    ul.appendChild(li);
  }
  navbar.appendChild(ul);
  navbar.className = "nav";

  return { navbar }
}

function append(parent,child){
  parent.appendChild(child);
}

export { nav, append }
