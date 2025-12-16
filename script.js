
const outputField = document.getElementById("output-field");
const form = document.getElementById("myForm");


const inputProcessor = () => {
    let input = document.getElementById("command-input").value;
    const splittedInput = input.split(" ");

    let cmd = splittedInput[0];
    let errorMsg = 'command not found';

    let result = 0;

    if(cmd === 'sum' | cmd === 'add' | cmd === '+'){
        for(let i = 1; i < splittedInput.length; i++){
            let num = parseInt(splittedInput[i]);
            if(!Number.isNaN(num)){
                result += num;
            }else{
                result = 'invalid input';
                break;
            }
            
        }
    }else if(cmd === 'subtract' | cmd === '-'){
        let firstNum = parseInt(splittedInput[1]);
        for(let i = 2; i < splittedInput.length; i++){
            firstNum -= parseInt(splittedInput[i]);
        }
        result = firstNum;
    }else if(cmd === 'multiply' | cmd === '*'){
        let firstNum = parseInt(splittedInput[1]);
        for(let i = 2; i < splittedInput.length; i++){
            firstNum *= parseInt(splittedInput[i]);
        }
        result = firstNum;
    }else if(cmd === 'divide' | cmd === '/'){
        let firstNum = parseInt(splittedInput[1]);
        for(let i = 2; i < splittedInput.length; i++){
            firstNum /= parseInt(splittedInput[i]);
        }
        result = firstNum;
    }else if(cmd === 'mod'){
        if(splittedInput.length === 3){
            let firstNum = parseInt(splittedInput[1]);
            let secondNum = parseInt(splittedInput[2]);

            result = firstNum % secondNum;
        }else{
            result = errorMsg;
        }
    }else if(cmd === 'pow'){
        if(splittedInput.length === 3){
            result = Math.pow(parseInt(splittedInput[1]), parseInt(splittedInput[2]));
        }else{
            result = errorMsg;
        }
    }else if(cmd === 'sqrt'){
        if(splittedInput.length === 2){
            result = Math.sqrt(parseInt(splittedInput[1]));
        }else{
            result = errorMsg;
        }
    }else if(cmd === 'abs'){
        if(splittedInput.length === 2){
            result = Math.abs(splittedInput[1]);
        }else{
            result = errorMsg;
        }
    }else if(cmd === 'reload'){
        window.location.reload()
    }else if(cmd === 'commands'){
        result = `
Commands:

add, sum, +
subtract, -
multiply, *
divide, /
mod
pow
sqrt
abs
reload
help
                    `;
    }else if(cmd === 'help'){
        result = `
add | sum | + <number1> <number2> ...  → adds numbers

subtract | - <number1> <number2> ...   → subtracts numbers

multiply | * <number1> <number2> ...   → multiplies numbers

divide | / <number1> <number2> ...     → divides numbers

mod <number1> <number2>    → remainder of division

pow <base> <exponent>   → power

sqrt <number>   → square root

abs <number>    → absolute value

reload   → reloads the page`;
    }else{
        result = errorMsg;
    }

    return result;
}


form.addEventListener("submit", (e) => {
    e.preventDefault();

    outputField.innerHTML = inputProcessor();
});