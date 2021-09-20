

function nav(){
  const navbar = document.createElement("div");
  const ul = document.createElement("ul")
  let arr = ["Menu","Drinks","Contacts"]
  for(let i = 0; i < 3; i++){
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.innerText = arr[i];
    a.id=arr[i].toLowerCase();
    li.appendChild(a)
    ul.appendChild(li);
  }
  navbar.appendChild(ul);
  navbar.className = "nav";

  return { navbar }
}

function main(){
  const main = document.createElement("section");
  main.className = "main";
  const div = document.createElement("div");
  div.className = "main-img-c";
  const h3 = document.createElement("h3")
  h3.innerText = "Menu";
  div.appendChild(h3);
  main.appendChild(div);

  return { main }
}

function menu(){
  const div = document.createElement("div");
  div.className = "menu";
  const ol = document.createElement("ol");

  for(let i = 0; i <= 5; i++){
    const li = document.createElement("li");
    const h4 = document.createElement("h4");
    const p = document.createElement("p");
    h4.innerText = "Food";
    p.innerText = "Some kind of Information about this food";

    li.appendChild(h4);
    li.appendChild(p);
    ol.appendChild(li);
  }

  div.appendChild(ol);

  return { div };
}
function drinks(){
  const div = document.createElement("div");
  div.className = "menu";
  const ol = document.createElement("ol");

  for(let i = 0; i <= 5; i++){
    const li = document.createElement("li");
    const h4 = document.createElement("h4");
    const p = document.createElement("p");
    h4.innerText = "Drinks";
    p.innerText = "Drink Info";

    li.appendChild(h4);
    li.appendChild(p);
    ol.appendChild(li);
  }

  div.appendChild(ol);

  return { div };
}
function contacts(){
  const div = document.createElement("div");
  div.className = "menu";
  const ol = document.createElement("ol");

  for(let i = 0; i <= 2; i++){
    const li = document.createElement("li");
    const h4 = document.createElement("h4");
    const p = document.createElement("p");
    h4.innerText = "Contact";
    p.innerText = "Contact Info";

    li.appendChild(h4);
    li.appendChild(p);
    ol.appendChild(li);
  }

  div.appendChild(ol);

  return { div };
}

function footer(){
  const footer = document.createElement("footer");
  footer.className = "footer";
  const div = document.createElement("div");
  div.className = "footer-info";
  div.innerText = "FOOTER";
  footer.appendChild(div);

  return { footer };
}

function append(parent,child){
  parent.appendChild(child);
}

export { nav, main, menu, footer, drinks, contacts }
