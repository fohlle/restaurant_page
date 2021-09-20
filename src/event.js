import { menu } from "./dom";


function events(m,ma,dr,ca){
  const menu = document.getElementById("menu");
  const drinks = document.getElementById("drinks");
  const contacts = document.getElementById("contacts");
  menu_e(menu,m,ma);
  drink_e(drinks,dr,ma);
  contacts_e(contacts,ca,ma);

}

function menu_e(node,m,ma){
  const main = document.querySelector(".main-img-c");
  const div = document.querySelector(".menu");
  node.addEventListener("click", () => {
    main.style.backgroundImage = "var(--food)";
    main.firstChild.innerText = "Menu";
    ma.removeChild(ma.lastChild);
    ma.appendChild(m);
  })
}
function drink_e(node,dr,ma){
  const main_c = document.querySelector(".main");
  const main = document.querySelector(".main-img-c");
  const div = document.querySelector(".menu");
  node.addEventListener("click", () => {
    main.style.backgroundImage = "var(--drinks)";
    main.firstChild.innerText = "Drinks";
    ma.removeChild(ma.lastChild);
    ma.appendChild(dr);
  })
}
function contacts_e(node,ca,ma){
  const main_c = document.querySelector(".main");
  const main = document.querySelector(".main-img-c");
  const div = document.querySelector(".menu");
  node.addEventListener("click", () => {
    main.style.backgroundImage = "var(--contacts)";
    main.firstChild.innerText = "Contacts";
    ma.removeChild(ma.lastChild);
    ma.appendChild(ca);
  })
}


export { events };