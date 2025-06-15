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
let display = document.querySelector(".display")

const display_function = function(event){
    display.textContent += event.target.innerHTML;
}

btns.forEach(button => {
    button.addEventListener("click", display_function)
});