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
        const previousKeyType = calculator.dataset.previousKeyType

        if (!action){
            if (displayNumber==="0"||previousKeyType==="operator"){
                calculator.dataset.previousKeyType="666";
                display.textContent = value
            } else{
                display.textContent = displayNumber+value
            }
        }
        if (action==="add" ||action==="subtract" ||action==="multiply" ||action==="divide"){
            calculator.dataset.previousKeyType="operator";
            calculator.dataset.firstValue=displayNumber
            calculator.dataset.operator=action
          
        }
        if (action==="decimal"){
           display.textContent = displayNumber+"."
        }   
        if (action==="clear"){
            display.textContent = "0"
        }    
        if (action==="equal"){
            const firstValue = calculator.dataset.firstValue
            const operator = calculator.dataset.operator
            const secondValue = displayNumber
            display.textContent=calculate(firstValue,operator,secondValue)
            calculator.dataset.previousKeyType="operator";
        }
    }
})
const calculate = (n1,operator,n2)=>{
    let result = "";
    if (operator==="add"){
        result = parseFloat(n1)+parseFloat(n2)
    } else if (operator==="subtract"){
        result = parseFloat(n1)-parseFloat(n2)
    }else if (operator==="multiply"){
        result = parseFloat(n1)*parseFloat(n2)
    }else if (operator==="divide"){
        result = parseFloat(n1)/parseFloat(n2)
    }
    return result
}