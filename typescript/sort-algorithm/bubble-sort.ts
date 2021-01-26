export {};

function bubbleSort(arr: number[]) {
   for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
         if (arr[j] > arr[j + 1]) {
            let current: number;

            current = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = current;
         }
      }
   }

   return arr;
}

console.log(bubbleSort([10, 9, 8, 7, 5, 6, 3, 4, 1, 2]));
