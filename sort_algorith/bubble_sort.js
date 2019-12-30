function bubleSort(arr) {
      for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                  if (arr[j] > arr[j + 1]) {
                        let temp;
                        temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;
                  }
            }
      }

      return arr;
}

console.log(bubleSort([10, 9, 8, 7, 5, 6, 3, 4, 1, 2]));