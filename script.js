function getLackyTicket(digitsAmount) {
    let result = [];
    let first = startRange (digitsAmount);
    let finish = endRange (digitsAmount);

    console.log(first);
    console.log(finish);

    for (let i = first ; i < finish; i++) {
        if (lackyIs(normalizeNum(i, digitsAmount))) {
            result.push(normalizeNum(i, digitsAmount));
        }
    }

    return result;
}

console.log(getLackyTicket(10));

function lackyIs(num, digitsAmount) {
    let sum1 = 0;
    let sum2 = 0;
    // console.log(num);
    num = String(normalizeNum(num, digitsAmount));
    // console.log(num);

    for (let i = 0; i < num.length ; i++) {
        // console.log(i, sum1, sum2);

        if (num.length / 2 > i) {
            sum1 += +(num[i]);
        } else {
            sum2 += +(num[i]);
        }
    }

    // console.log(sum1, sum2);
    return sum1 == sum2;
}
// console.log(lackyIs(1071414701));

function normalizeNum (num, digitsAmount) {
    let strNum = String(num);
// console.log (strNum);
    return formStr('0', digitsAmount - strNum.length) + strNum;
}

function formStr(data, digitsAmount) {
    let result = '';

    for (let i = 1 ; i <= digitsAmount; i++) {
        result += data
    }

    return result;
}

// console.log(formStr(0, 6));

//console.log(normalizeNum(111, 6));

// console.log(lackyIs(10023, 6));

function startRange (digitsAmount) {
    strResult ='';

    for(let i = 0; i < digitsAmount / 2 - 1; i++) {
        strResult += '0';
    }

    strResult += 1;

    return strResult + strResult;
}

// console.log(startRange(6));

function endRange (digitsAmount) {
    strResult = '';

    for (let i = 1; i <= digitsAmount; i++) {
        strResult += '9';
    }

    return strResult;
}

// console.log(endRange(6));