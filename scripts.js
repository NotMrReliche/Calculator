//user hits number key//
//user hits operator key//
//user hits decimal key//
//user hits equal key//
//user hits clear key//
const calculator = document.querySelector(".Calculator");
console.log (calculator) 
const keys = calculator.querySelector(".Calculator-Keys");
keys.addEventListener("click",e => {
    if (e.target.matches("button")){
        const key = e.target;
        const action = key.dataset.action
        console.log (action)
        if (action==="add" ||action==="subtract" ||action==="multiply" ||action==="divide"){
            console.log ("operation key pressed")
        }
        if (action==="decimal"){
            console.log ("decimal pressed")
        }   
        if (action==="clear"){
            console.log ("clear key")
        }    
        if (action==="equal"){
            console.log ("calculate")
        }
    }
})
