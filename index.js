
// document.querySelectorAll("button")[0].addEventListener("click",function() {
//     alert("i got click ")
// })
// document.querySelectorAll("button")[2].addEventListener("click",function() {
//     alert("i got click ")
// })
// document.querySelectorAll("button")[3].addEventListener("click",function() {
//     alert("i got click ")
// })
// document.querySelectorAll("button")[4].addEventListener("click",function() {
//     alert("i got click ")
// })
// document.querySelectorAll("button")[5].addEventListener("click",function() {
//     alert("i got click ")
// })
// document.querySelectorAll("button")[6].addEventListener("click",function() {
//     alert("i got click ")
// })
// document.querySelectorAll("button")[7].addEventListener("click",function() {
//     alert("i got click ")
// })





// We Use For Loop For This Class Drum 

// Detect button Press

var numOfDrumBtn = document.querySelectorAll(".drum").length;

for(let i = 0 ; i < numOfDrumBtn; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function() {

  
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);

    })
}   
// detect keyboard Press 

// using keypress eventlistener topic 12 lecture 10 

        document.addEventListener("keypress",function(event){
           makeSound(event.key)
      
    
});



 function makeSound(key){

    switch(key) {

        case "w":
        var tom1 = new Audio("sounds/tom-1.mp3")
        tom1.play();
        break;

        case "a" :
            var tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play();
            break;

        case "s" :
            var tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play();
            break;
            
        case "d" : 
        var tom4 = new Audio("sounds/tom-4.mp3") 
        tom4.play();
        break; 

        case "j" : 
        var snare = new Audio("sounds/snare.mp3")
        snare.play();
        break;

        case "k" : 
        var crash = new Audio("sounds/crash.mp3")
        crash.play();
        break;

        case "l" :
            var kick = new Audio("sounds/kick-bass.mp3")
            kick.play();
            break;
        
        


        default:
            console.log(buttonInnerHTML)
    }
 }