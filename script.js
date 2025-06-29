let x;
let operator;
let y;


const add = function(a ,b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const multiply = function(a, b) {
    return a * b;
};

const divide = function(a, b) {
    return a / b;
};

const operate = function(n1, op, n2) {
    if (op == "+") return add(n1, n2)
    if (op == "-") return subtract(n1, n2)
    if (op == "*") return multiply(n1, n2)
    if (op == "/") return divide(n1, n2)
}

let btns = document.querySelectorAll("button")

let numbers = document.querySelectorAll(".number")
let ops = document.querySelectorAll(".operator")
let equals = document.querySelector(".equals");
let clear = document.querySelector(".clear")
let display = document.querySelector(".display")

let opsClicked = false;
let calculationFinished = false;

const display_function = function(event){
    if (event.target.matches(".number")){
        if (calculationFinished){
            display.textContent = event.target.textContent;
            if (opsClicked){
                y = parseInt(display.textContent);
            }
            else{
                x = parseInt(display.textContent);
            }
            calculationFinished = false;
        }
        else{
            display.textContent += event.target.textContent;
            if (opsClicked){
                y = parseInt(display.textContent);
            }
            else{
                x = parseInt(display.textContent);
            }
        }
    }

    if (event.target.matches(".operator")){
        operator = event.target.textContent;
        opsClicked = true;
        display.textContent = "";
    }

    if (event.target.matches(".equals")){
        display.textContent = operate(x, operator, y).toString();
        x = parseInt(display.textContent);
        opsClicked = false;
        calculationFinished = true;
    }

    if (event.target.matches(".clear")){
        display.textContent = "";
        x = null;
        y = null;
        operator = null;
        opsClicked = false;
        calculationFinished = false;
    }
}

btns.forEach(button => {
    button.addEventListener("click", display_function)
});

