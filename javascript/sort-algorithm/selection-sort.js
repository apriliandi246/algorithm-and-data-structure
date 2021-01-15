function selectionSort(arr) {
      let imin;

      for (let i = 0; i < arr.length; i++) {
            imin = i;

            for (let j = i; j < arr.length; j++) {
                  if (arr[j] < arr[imin]) {
                        imin = j;
                  }
            }

            let temp;
            temp = arr[i];
            arr[i] = arr[imin];
            arr[imin] = temp;
      }

      return arr;
}

console.log(selectionSort([10, 9, 8, 7, 5, 6, 3, 4, 1, 2]));