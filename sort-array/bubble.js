//using bubble sort

let num = [0,3,2, 0,0,1,4];
//console.log(num.sort());

function bubbleSort(num) {
    for(let i=0; i<num.length-1; i++) {

        let swap =  false;

        for(let j=0; j<num.length-i-1; j++) {
            if(num[j] > num[j+1]) {
                let temp = num[j];
                num[j] = num[j+1];
                num[j+1] = temp;
                swap = true;
            }
        }

        // no swap
        if(!swap) break;
    }

    return num;
}

console.log("Before sorting :", num);
console.log("After sorting :", bubbleSort(num));
