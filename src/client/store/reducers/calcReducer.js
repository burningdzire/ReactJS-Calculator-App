import * as operations from "../../../assets/constants";
const calcReducer = (state = { operands: [] }, action) => {
    switch (action.type) {
        // case operations.ADD:
        // case operations.SUBTRACT:
        // case operations.MULTIPLY:
        // case operations.DIVIDE:
        case operations.COMPUTE_RESULT:
            break;
        default:
            break;
    }
    return state;
}

export default calcReducer;