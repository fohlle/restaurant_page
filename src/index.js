  import testing from "./test"
  import "./style.css"
  import Food from "./food.jpeg"
  import { nav } from "./dom"
  import { main } from "./dom"
  import { drinks } from "./dom"
  import { contacts } from "./dom"
  import { menu } from "./dom"
  import { footer } from "./dom"
  import { events } from "./event"

  const restaurant = ( () =>{
  

//import "./style_two.css"


  const wrapper = document.querySelector(".wrapper")
  const navbar = nav().navbar;

  const main_c = main().main;
  const menu_c = menu().div;
  const drink_c = drinks().div;
  const contacts_c = contacts().div;
  const footer_c = footer().footer;

  wrapper.appendChild(navbar);
  wrapper.appendChild(main_c);
  main_c.appendChild(menu_c);
  wrapper.appendChild(footer_c);

  events(menu_c,main_c,drink_c,contacts_c);

  //const food_img = new Image();
  //food_img.src = Food;
  //const image_c = document.querySelector(".main-img-c");

  

})();