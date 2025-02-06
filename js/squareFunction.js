let squareFunction = (number) =>{
    return number*number;
}



const square = () =>{
    let numberInput = document.getElementById("inputBox").value;
let numberOutput = squareFunction(numberInput);
    document.getElementById("answer").textContent = `Square of ${numberInput} is ${numberOutput}`;
} 
