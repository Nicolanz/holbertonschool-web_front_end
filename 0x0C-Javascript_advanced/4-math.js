
function divideBy(firstNumber){
    function operation(secondNumber){
        return secondNumber / firstNumber;
    }
    return operation;
}

function addBy(firstNumber){
    function secondOperation(secondNumber){
        return secondNumber + firstNumber;
    }
    return secondOperation;
}

const addBy100 = addBy(100);
const addBy1000 = addBy(1000);
const divideBy10 = divideBy(10);
const divideBy100 = divideBy(100);
