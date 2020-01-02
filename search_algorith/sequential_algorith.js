function sequentialSearch(data, arr) {
      let i = 0;

      while (i < arr.length && arr[i] !== data) {
            i++;
      }

      if (arr[i] === data) {
            return true;
      } else {
            return false;
      }
}

console.log((sequentialSearch(100, [10, 2, 3, 1, 4, 6, 5, 8, 7, 9])));