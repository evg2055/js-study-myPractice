let date = new Date();

function addZerro(num) {
    if(num <= 9) {
        return'0' + num;
    } else {
        return num;
    }
};

alert (addZerro(date.getHours()) + ':' + addZerro(date.getMinutes()) + ':' + addZerro(date.getSeconds()) + ' ' + addZerro(date.getDate()) + '-' + addZerro(date.getMonth() + 1) + '-' + date.getFullYear() );