//user hits number key//
//user hits operator key//
//user hits decimal key//
//user hits equal key//
//user hits clear key//
const calculator = document.querySelector(".Calculator");
const display = document.querySelector(".Calculator-Display");
const keys = calculator.querySelector(".Calculator-Keys");
keys.addEventListener("click",e => {
    if (e.target.matches("button")){
        const key = e.target;
        const action = key.dataset.action
        const value = key.textContent
        const displayNumber = display.textContent

        if (!action){
            if (displayNumber==="0"){
                display.textContent = value
            } else{
                display.textContent = displayNumber+value
            }
        }
        if (action==="add" ||action==="subtract" ||action==="multiply" ||action==="divide"){
            
          
        }
        if (action==="decimal"){
           display.textContent = displayNumber+"."
        }   
        if (action==="clear"){
            display.textContent = "0"
        }    
        if (action==="equal"){
            console.log ("calculate")
        }
    }
})
