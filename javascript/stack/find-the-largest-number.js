// Find the largest number in Array using Stack
function findTheLargestData(arr) {
      let maxChace = [];

      for (let i = 0; i < arr.length; i++) {
            if (maxChace.length === 0) {
                  maxChace.push(arr[i]);

            } else {
                  if (arr[i] === maxChace[maxChace.length - 1] || arr[i] > maxChace[maxChace.length - 1]) {
                        maxChace.push(arr[i]);
                  }
            }
      }

      return `Max Value => ${maxChace[maxChace.length - 1]}`;
}

console.log(findTheLargestData([2, 2, 10, 100, 4, 4, 3, 2, 3, 4, 3, 2, 3, 4, 3, 2, 1000, 1001]));
console.log(findTheLargestData([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3]));