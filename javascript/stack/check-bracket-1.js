let data = "({[()]}]";
let arrBracket = data.split("");

if (arrBracket.length % 2 === 0) {
	for (let i = 0; i < arrBracket.length - 1; i++) {
		if (arrBracket[i] === "{" && arrBracket[arrBracket.length - 1] === "}") {
			console.log(
				`${arrBracket[i]} ${arrBracket[arrBracket.length - 1]} = ${true}`
			);
			arrBracket.pop();
		} else if (
			arrBracket[i] === "[" &&
			arrBracket[arrBracket.length - 1] === "]"
		) {
			console.log(
				`${arrBracket[i]} ${arrBracket[arrBracket.length - 1]} = ${true}`
			);
			arrBracket.pop();
		} else if (
			arrBracket[i] === "(" &&
			arrBracket[arrBracket.length - 1] === ")"
		) {
			console.log(
				`${arrBracket[i]} ${arrBracket[arrBracket.length - 1]} = ${true}`
			);
			arrBracket.pop();
		} else {
			console.log(
				`${arrBracket[i]} ${arrBracket[arrBracket.length - 1]} = ${false}`
			);
			arrBracket.pop();
		}
	}
} else {
	console.log("--- Format Error ---");
}
