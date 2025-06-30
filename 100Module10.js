// DOM Events
// Events are signals that something has occurred. (user inputs/actions)

// onclick: When an element is clicked
//  onmouseenter: When mouse enters an element
// let btn = document.querySelector("button");
// console.dir(btn);
// btn.onclick = function(){
//     console.log("button was clicked");
// }
// function sayHello(){
//     alert("Hello");
// }
// btn.onclick = sayHello;
// let btns = document.querySelectorAll("button");
// for(btn of btns){
//     btn.onclick = sayHello;
//     btn.onmouseenter = function(){
//         console.log("You hover the button");
//     }
// }
// let btns = document.querySelectorAll("button");
// for(btn of btns){
//     // btn.addEventListener("click",sayHello);
//     //  btn.addEventListener("click",sayName);
//       btn.addEventListener("dblclick",function(){
//         console.log("You double clicked this button ");
//       });
// };
// function sayHello(){
//     alert("Hello");
    // console.log("You clicked the button");
// }
// Event Listener
// addEventListener
// element.addEventListener( event, callback)
// function sayName(){
//         alert("Apna College");
//     }

let btn = document.querySelector("button");
btn.addEventListener("click",function(){
    let h3 = document.querySelector("h3");
    let randomColor = getRandomCol();
    h3.innerText = randomColor;
    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;
});
function getRandomCol(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    let color = `rgb(${red},${green},${blue})`;
    return color;
}
