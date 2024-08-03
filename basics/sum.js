/* 
Sum of all natural numbers 1 to n
*/

function sum(num) {
    // let sum = 0;
    // for(let i=0; i<=num; i++) {
    //     sum+=i;
   //  }
    // return sum;

    return num*(num+1)/2;
}

console.log(sum(5));
