function insertSort(arr) {
	let temp;
	let pos;

	for (let i = 0; i < arr.length; i++) {
		temp = arr[i];
		pos = i;

		for (let j = i; j > 0; j--) {
			if (temp < arr[j - 1]) {
				arr[j] = arr[j - 1];
				pos--;
			}
		}

		arr[pos] = temp;
	}

	return arr;
}

console.log(insertSort([10, 9, 8, 7, 5, 6, 3, 4, 1, 2]));
