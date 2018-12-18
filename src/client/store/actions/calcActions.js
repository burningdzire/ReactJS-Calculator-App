import * as operations from "../../../assets/constants";
// export function operationAdd() {
//     return {
//         type: operations.ADD,
//     }
// }

// export function operationSubtract() {
//     return {
//         type: operations.SUBTRACT,
//     }
// }

// export function operationMultiply() {
//     return {
//         type: operations.MULTIPLY,
//     }
// }

// export function operationDivide() {
//     return {
//         type: operations.DIVIDE,
//     }
// }

export function addInput(ch) {
    return {
        type: operations.ADD_OPERATOR_OPERAND,
        payload: ch
    }
    
}
export function calculateResult() {
    return {
        type: operations.COMPUTE_RESULT
    }
}