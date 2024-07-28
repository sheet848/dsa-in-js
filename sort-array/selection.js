
let arr = [5,2,7,1,0];

function selectionSort(arr) {

    for(let i=0; i<arr.length-1; i++) {

        // finding min ele
        let minIndex = i;
        for (let j=i+1; j<arr.length; j++) {
            if(arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        //swapping min element with first ele

        let temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }

    return arr;
}

console.log(arr);
console.log(selectionSort(arr));
