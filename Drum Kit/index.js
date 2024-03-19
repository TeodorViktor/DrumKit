var arr = document.querySelectorAll(".drum");
var audios = ["sounds/crash.mp3", "sounds/kick-bass.mp3", "sounds/snare.mp3", "sounds/tom-1.mp3", "sounds/tom-2.mp3", "sounds/tom-3.mp3", "sounds/tom-4.mp3"];
for(var i = 0; i < arr.length; i++) {
    arr[i].addEventListener("click", function (){
        var obj = this.innerHTML;
        makeSound(obj);
        addAnimation(obj)

    });
}


document.addEventListener("keydown", function(event){
    var keys = event.key;
        makeSound(keys);
        addAnimation(keys)
    }
)
// var audio = new Audio(audios[i]);
// audio.play();

function makeSound(key){
    switch(key){
        case "w":
            var w = new Audio(audios[0]);
            w.play();
            break;
        case "a":
            var a = new Audio(audios[1]);
            a.play();
            break;

        case "s":
            var s = new Audio(audios[2]);
            s.play();
            break;

        case "d":
            var d = new Audio(audios[3]);
            d.play();
            break;

        case "j":
            var j = new Audio(audios[4]);
            j.play();
            break;
            

        case "k":
            var k = new Audio(audios[5]);
            k.play();
            break;

        case "l":
            var l = new Audio(audios[6]);
            l.play();
            break;
        default:
            alert("nix"); 
}}


function addAnimation(theButton){
    var objec = document.querySelector('.' + theButton);
    objec.classList.add("pressed");
    setTimeout(function(){
        objec.classList.remove("pressed");
    }, 100);
    
}