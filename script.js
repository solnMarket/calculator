function calculate(expression){ 
    if(expression.includes("+")){
        let plus = expression.split("+")
        return Number(plus[0]) + Number(plus[1])

    }else if(expression.includes("-")){
        let minus = expression.split("-")
        return Number(minus[0]) - Number(minus[1])

    }else if(expression.includes("*")){
        let mult = expression.split("*")
        return Number(mult[0]) * Number(mult[1])

    }else if(expression.includes("/")){
        let div = expression.split("/")
        if(div[1]==="0"){
            return "cant divide by zero dumbahh"
        }
        return Number(div[0]) / Number(div[1])   
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const keys = document.querySelectorAll(".key");
    const value = document.querySelector(".input");

    keys.forEach(key => {
        key.addEventListener("click", function() {

            if(this.textContent === "C"){
                value.textContent = ""
            }

            if(this.textContent=== "="){
                value.textContent = calculate(value.textContent)
            }
            if((value.textContent.includes("+") || value.textContent.includes("-") || value.textContent.includes("*") || value.textContent.includes("/")) && (this.textContent==="+" || this.textContent==="-" || this.textContent==="*" || this.textContent==="/")){
                value.textContent = calculate(value.textContent) 
            }

            if(!(this.textContent === "=" || this.textContent === "C")){
                value.textContent = value.textContent + this.textContent;
            }
            
            
            
        });
    });
});


// let input = value.textContent.split("")

// let result = calculate(input[0], input[1], input[2])





