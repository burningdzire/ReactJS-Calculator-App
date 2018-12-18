import * as operations from "../../../assets/constants";

function isOperator(ch) {
    return (ch === '+' || ch === '-' || ch === '*' || ch === "/");
}

// function performOperation(a, b, ch) {
//     switch (ch) {
//         case "+":
//             return a + b;
//         case "-":
//             return a - b;
//         case "*":
//             return a * b;
//         case "/":
//             return a / b;
//     }
// }

const calcReducer = (state = { sequence: [], res: 0, expression:"" }, action) => {
    switch (action.type) {
        case operations.ADD_OPERATOR_OPERAND:
            return {
                ...state,
                sequence: [...state.sequence, action.payload],
                expression: state.expression+action.payload
            }
        case operations.COMPUTE_RESULT:
            let operands = [];
            let operators = [];
            let currOperand = 0;
            // let result;
            for (let i = 0; i < state.sequence.length; i++) {
                if (isOperator(state.sequence[i])) {
                    operands.push(currOperand);
                    currOperand = 0;
                    operators.push(state.sequence[i]);
                } else {
                    currOperand = currOperand * 10 + parseInt(state.sequence[i]);
                }
            }
            state = {
                ...state,
                sequence : [],
            }
            return state;
        default:
            return state;
    }
}

export default calcReducer;