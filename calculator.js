let container = document.querySelector('.container');
let width = container.offsetHeight;
let height = container.offsetWidth;
//TODO divide calulator html into container { displayArea,  textArea} 
//further divide text area into nums1-9 and area to the right and below


let temp;
let operators;
let buttonWidth;
let buttonHeight;

function drawNumButtons(num){
    for(let i = 1; i <= (num*num); i++){
        buttonWidth= width/num;
        buttonHeight = width/num;
        //new^
        let button = document.createElement('button');
            button.style.cssText = `width: ${width/num}px; height: ${height/num}px;`;
            //button.style.cssText += 'background-color: white; border: 2px solid black;';
            button.style.cssText += 'box-sizing: border-box;';
            button.addEventListener('click' , input);
            button.textContent += i;

            button.setAttribute('data-key', i);
            button.classList.add('1to9');
            //
            container.appendChild(button);
    } 
}

function drawOperators(){
    operators = ['+', '-', '*', '/', '='];
    for(let i = 0; i < operators.length; i++){
        let operator = operators[i]
        let button = document.createElement('button');
            button.style.cssText = `width: ${buttonWidth}px; height: ${buttonHeight}px;`;
            //button.style.cssText += 'background-color: white; border: 2px solid black;';
            button.style.cssText += 'box-sizing: border-box;';
            button.addEventListener('click' , inputOp);
            button.textContent += operator;

            button.setAttribute('data-key', operator);
            button.classList.add('operators');
            //
            container.appendChild(button);
    } 

}

function input(){
    temp = this.getAttribute('data-key')
    console.log(temp);
}
function inputOp(){
    temp = this.getAttribute('data-key')
    console.log(temp);
}


drawNumButtons(3);
drawOperators();