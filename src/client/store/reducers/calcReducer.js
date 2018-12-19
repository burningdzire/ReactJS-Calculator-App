import * as operations from "../../../assets/constants";

function isOperator(ch) {
    return (ch === '+' || ch === '-' || ch === '*' || ch === "/");
}

// eslint-disable-next-line no-extend-native
String.prototype.isNumeric = function() {
    return !isNaN(parseFloat(this)) && isFinite(this);
}

// eslint-disable-next-line no-extend-native
Array.prototype.clean = function() {
    for(var i = 0; i < this.length; i++) {
        if(this[i] === "") {
            this.splice(i, 1);
        }
    }
    return this;
}

function infixToPostfix(infix){
    let outputQueue = "";
    let operatorStack = [];
    let operators = {
        "^": {
            precedence: 4,
            associativity: "Right"
        },
        "/": {
            precedence: 3,
            associativity: "Left"
        },
        "*": {
            precedence: 3,
            associativity: "Left"
        },
        "+": {
            precedence: 2,
            associativity: "Left"
        },
        "-": {
            precedence: 2,
            associativity: "Left"
        }
    }
    
    infix = infix.replace(/\s+/g, "");
    infix = infix.split(/([+\-*/^()])/).clean();
    
    for (let i = 0; i < infix.length; i++) {
        let token = infix[i];
        if (token.isNumeric()) {
            outputQueue += token + " ";
        } else if ("^*/+-".indexOf(token) !== -1) {
            var o1 = token;
            var o2 = operatorStack[operatorStack.length - 1];
            while ("^*/+-".indexOf(o2) !== -1 && ((operators[o1].associativity === "Left" && operators[o1].precedence <= operators[o2].precedence) || (operators[o1].associativity === "Right" && operators[o1].precedence < operators[o2].precedence))) {
                outputQueue += operatorStack.pop() + " ";
                o2 = operatorStack[operatorStack.length - 1];
            }
            operatorStack.push(o1);
        } else if (token === "(") {
            operatorStack.push(token);
        } else if (token === ")") {
            while (operatorStack[operatorStack.length - 1] !== "(") {
                outputQueue += operatorStack.pop() + " ";
            }
            operatorStack.pop();
        }
    }

    while(operatorStack.length > 0) {
        outputQueue += operatorStack.pop();
    }
    return outputQueue;
}


const INITIAL_STATE = {
    sequence: [],
    res: 0,
    expression: ""
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case operations.ADD_OPERATOR_OPERAND:
            return {
                ...state,
                sequence: [...state.sequence, action.payload],
                expression: state.expression + action.payload
            }
        case operations.COMPUTE_RESULT:
            let operands = [];
            let operators = [];
            let currOperand = 0;
            for (let i = 0; i < state.sequence.length; i++) {
                if (isOperator(state.sequence[i])) {
                    operands.push(currOperand);
                    currOperand = 0;
                    operators.push(state.sequence[i]);
                } else {
                    currOperand = currOperand * 10 + parseInt(state.sequence[i]);
                }
            }
            let outputQueue = infixToPostfix(state.expression);
            console.log(outputQueue);
            state = {
                ...state,
                sequence: [],
            }
            return state;
        default:
            return state;
    }
}