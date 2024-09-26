function calculate(a, o, b){    
    switch(o){
        case "+":
            return Number(a) + Number(b);
            break;
        case "-":
            return a - b;
            break;
        case "*":
            return a * b;
            break;
        case "/":
            return a / b;
        default:
            return "you did something wrong"
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
            if(!(this.textContent === "=" || this.textContent === "C")){
                value.textContent = value.textContent + this.textContent;
            }
            if(this.textContent=== "="){
                let input = value.textContent.split("")

                value.textContent = calculate(input[0], input[1], input[2])
            }
            
        });
    });
});


// let input = value.textContent.split("")

// let result = calculate(input[0], input[1], input[2])





