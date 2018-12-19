import * as operations from "../../../assets/constants";
import { infixToPostfix } from "./infixToPostfix";
import { evaluatePostfix } from "./evaluatePostfix";
function isOperator(ch) {
    return (ch === '+' || ch === '-' || ch === '*' || ch === "/");
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
            let computedResult = evaluatePostfix(outputQueue);
            state = {
                ...state,
                sequence: [],
                expression: computedResult + "",
            }
            return state;
        default:
            return state;
    }
}