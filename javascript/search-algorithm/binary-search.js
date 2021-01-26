function binarySearch(arr, data) {
   // sorth
   let imin;

   for (let i = 0; i < arr.length - 1; i++) {
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

   // binary search
   let i = 0;
   let j = arr.length;
   let found = false;
   let result;
   let k;

   while (found === false && i <= j) {
      k = Math.floor((i + j) / 2);

      if (arr[k] === data) {
         found = true;
         result = k;
      } else {
         if (arr[k] > data) {
            j = k - 1;
         } else {
            i = k + 1;
         }
      }
   }

   if (found) return `Angka ${data} terletak di index ${result}`;
   else return `Angka ${data} tidak ditemukan`;
}

console.log(binarySearch([10, 2, 3, 1, 4, 6, 5, 8, 7, 9], 3));
