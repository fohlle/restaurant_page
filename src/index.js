  import testing from "./test"
  import "./style.css"
  import Food from "./food.jpeg"
  import { nav } from "./dom"

  const restaurant = ( () =>{
  

//import "./style_two.css"

  const wrapper = document.querySelector(".wrapper")
  const navbar = nav().navbar;

  wrapper.appendChild(navbar);

  const food_img = new Image();
  food_img.src = Food;
  const image_c = document.querySelector(".main-img-c");


  console.log("hi");
  console.log(testing());

})();