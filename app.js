class Calculator{
    constructor(prevElem, currElem){
        this.prevElem = prevElem;
        this.currElem = currElem;
        this.clear();
    }

    clear(){
        this.curr = '';
        this.prev = '';
        this.operation = undefined;
        
    }

    delete(){
        this.curr = this.curr.toString().slice(0, -1);
    }

    appendNum(num){
        if (num === '.' && this.curr.includes('.'))return;
        this.curr = this.curr + num;
    }

    chooseOperation(operation){
        if(this.curr === '')return;
        if(this.prev !== ''){
            this.compute();
        }
        this.operation = operation;
        this.prev = this.curr;
        this.curr = '';
    }

    compute(){
        let computation;
        const previ = parseFloat(this.prev);
        const curre = parseFloat(this.curr);
        if(isNaN(previ) || isNaN(curre))return;
        switch (this.operation) {
            case '+':
                computation = previ + curre;
                break;
            case '-':
                computation = previ - curre;
                break;
            case '×':
                computation = previ * curre;
                break;
            case '÷':
                computation = previ / curre;
                break;
            default:
                break;
        }

        this.curr = computation;
        this.operation = undefined;
        this.prev = '';
        
    }

    updataDisplay(){
        this.currElem.innerHTML = this.curr;
        this.prevElem.innerText = this.prev;

    }
}


const numberBtn = document.querySelectorAll('[data-number]');
const operationBtn = document.querySelectorAll('[data-operation]');
const equalsBnt = document.querySelector('[data-equals]');
const deleteBtn = document.querySelector('[data-delete]');
const acBtn = document.querySelector('[data-ac]');
const prevElem = document.querySelector('[data-previous]');
const currElem = document.querySelector('[data-current]');


const calculator = new Calculator(prevElem, currElem);


numberBtn.forEach((button) =>{
    button.addEventListener('click', () =>{
        calculator.appendNum(button.innerText);
        calculator.updataDisplay();
    })
})

operationBtn.forEach((operate) =>{
    operate.addEventListener('click', () =>{
        calculator.chooseOperation(operate.innerText);
        calculator.updataDisplay();
    })
})

equalsBnt.addEventListener('click', button =>{
    calculator.compute();
    calculator.updataDisplay();
})

acBtn.addEventListener('click', button =>{
    calculator.clear();
    calculator.updataDisplay();
})

deleteBtn.addEventListener('click', button=>{
    calculator.delete();
    calculator.updataDisplay();
})