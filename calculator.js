let numbersAndOps = document.querySelector('.numbersAndOps');
let rightButtons = document.querySelector('.rightButtons');
let width = numbersAndOps.offsetHeight;
let height = numbersAndOps.offsetWidth;
let gap = window.getComputedStyle(numbersAndOps).getPropertyValue('gap');
gap = +gap.substring(0,1);

//DISPLAYS
let topDisplay = document.querySelector('.topDisplay');
let mainDisplay = document.querySelector('.mainDisplay');

let temp;
let operators;
let buttonWidth;
let buttonHeight;

//Nums and Operator
let num1, num2, operator;

function drawNumAndOp(){
    let numAndOperators = ['7', '8', '9', '/', 
                        '4', '5', '6', '*',
                        '1', '2', '3', '-',
                        '-/+', '0', '.', '+'];
    let numbers = []
    for (let i = 0; i < 10; i++){
        numbers.push(i.toString()); // need so that the elements match the strings above ^^
    }
    let operators = ['+', '-', '*', '/'];

    console.log(numAndOperators.length);
                        
    buttonWidth= width/4;
    buttonHeight= height/4;

    numAndOperators.forEach(element => {
        let button = document.createElement('button');
            button.style.cssText = `width: ${buttonWidth}px; height: ${buttonHeight}px;`;
            button.style.cssText += 'box-sizing: border-box;';
            //button.style.cssText += 'margin: 5px;';
            button.textContent += element;
            button.setAttribute('data-key', element);

            if(operators.includes(element)){
                button.addEventListener('click' , inputOp);
                button.classList.add('operators');
            }else if(numbers.includes(element)){
                button.addEventListener('click' , input);
                button.classList.add('1to9');
            }
            
            //
            numbersAndOps.appendChild(button);
    });
}

function drawRightButtons(){
    let rButtons = ['C', 'DEL', '='];
    
    rButtons.forEach( element =>{
        let button = document.createElement('button');
        button.style.cssText = `width: ${buttonWidth}px; height: ${buttonHeight}px;`;
        button.style.cssText += 'box-sizing: border-box;';
        //button.style.cssText += 'margin: 5px;';
        button.textContent += element;
        button.setAttribute('data-key', element);

        if(element == 'C'){
            button.addEventListener('click' , clear);
        }else if(element == 'DEL'){
            button.addEventListener('click' , del);
        }else if(element == '='){
            button.addEventListener('click' , equals);
            button.style.cssText = `height: ${(buttonHeight * 2) + gap}px;`;
        }
        button.classList.add('special');
        
        //
        rightButtons.appendChild(button);
    });

}


function input(){

    temp = this.getAttribute('data-key');
    console.log(temp);
    if(!operator){
        //write on num1
        mainDisplay.textContent= !num1 ? temp : mainDisplay.textContent + temp;
        num1 = mainDisplay.textContent;
    }else{
        //write on num2
        mainDisplay.textContent= !num2 ? temp : mainDisplay.textContent + temp;
        num2 = mainDisplay.textContent;
    }

    
}
function inputOp(){
    //operator = this.getAttribute('data-key')
    //console.log(operator);
    //topDisplay.textContent= num1 + operator;

    // try write below before sleep im sleepy ???
    if(!operator){
        operator = this.getAttribute('data-key')
        topDisplay.textContent= `${num1} ${operator} `; 
    }else if (!num2){
        operator = this.getAttribute('data-key')
        topDisplay.textContent= topDisplay.textContent.slice(0,-2) + `${operator} `;
        //make nested if inside here- if operator == null >?? nonoonono
    }else{
        //evaluate
        //let prevOperator = operator;
        num1 = evaluate(num1, num2, operator);    
        operator = this.getAttribute('data-key') //moved this line to bottom from top
        topDisplay.textContent+= `${num2} ${operator} `;
        mainDisplay.textContent= num1;
        num2 = null;
        //operator = null ?? noNO i dont think so it would get rid of the operato we just typed
    }
    
    console.log(operator);
}
function clear(){

}
function del(){

}
function equals(){

}

function evaluate(num1, num2, operator){
    let out;
    if(operator == '+'){
        out = +num1 + +num2;
    }else if(operator == '-'){
        out = num1 - num2;
    }else if(operator == '*'){
        out = num1 * num2;
    }else if (operator == '/'){
        out = num1 /num2
    }
    return out;
}


drawNumAndOp();
drawRightButtons();