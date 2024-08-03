/*
Count the number of digits of a number
34252: 5
 /10
*/

function count(num) {
    num = Math.abs(num);
    let count = 0;
    do {
        count++;
        num = Math.floor(num/10);
    } while(num > 0);

    return count;
}

console.log(count(121));
console.log(count(-121));
