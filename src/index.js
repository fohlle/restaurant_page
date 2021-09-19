
import testing from "./test"
import "./style.css"
import Food from "./food.jpeg"

//import "./style_two.css"

const food_img = new Image();
food_img.src = Food;
const image_c = document.querySelector(".main-img-c");
//image_c.appendChild(food_img);

console.log("hi");
console.log(testing());