function computeResults(a, b, op) {
    switch (op) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        default:
            return 0;
    }
}

function isOperator(ch) {
    return (ch === '+' || ch === '-' || ch === '*' || ch === "/");
}

function isDigit(ch) {
    return (ch >= "0" && ch <= "9");
}

function convertToList(outputQueue) {
    let sequence = [];
    let i = 0, curr = 0;
    for (i = 0; i < outputQueue.length; i++) {
        if (isDigit(outputQueue[i])) {
            curr = curr * 10 + parseFloat(outputQueue[i]);
        } else if (outputQueue[i] === " ") {
            sequence.push(curr);
            curr = 0;
        } else if (isOperator(outputQueue[i])) {
            sequence.push(outputQueue[i]);
            curr = 0;
        }
    }
    return sequence;
}
export function evaluatePostfix(outputQueue) {
    let seq = convertToList(outputQueue);
    console.log(seq);
    let stack = [];
    for (let i = 0; i < seq.length; i++) {
        if (isOperator(seq[i])) {
            let val1 = stack.pop();
            let val2 = stack.pop();
            console.log(seq[i]);
            console.log(val1, val2) ;
            stack.push(computeResults(parseFloat(val2), parseFloat(val1), seq[i]));
        } else {
            stack.push(seq[i]);    
        }
        console.log(stack);
    }
    return stack.pop();
}  