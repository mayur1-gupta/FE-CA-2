var sco = document.getElementById("yourScore")
const pharse = document.getElementById("phase")
scoore= localStorage.getItem("score");
sco.innerHTML = scoore
// console.log(scoore)

const randomPharse = Math.floor(Math.random()*4)




winArr=["Victory is yours!","A champion rises!","Nailed it like a pro!",
"So easy, a caveman could do it!","High five? More like high fives all around!",
]

LosingArr=["Defeat is a teacher. Learn from it, rise again!",
"A valiant effort, though victory slipped away.",
"Better luck next time! Every champion stumbles.",
"The path to victory is paved with setbacks. Keep striving!",
"Though you fell, your spirit remains unbroken."]

if (scoore == 8) {
    pharse.innerText = winArr[randomPharse]
    
}
else if (scoore <5) {
    pharse.innerHTML = LosingArr[randomPharse]
}
else {
    pharse.innerText = LosingArr[randomPharse]
}
