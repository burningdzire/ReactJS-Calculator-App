import * as operations from "../../../assets/constants";

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