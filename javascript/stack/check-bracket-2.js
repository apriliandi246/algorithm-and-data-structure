let data = "[({()})[]}[)";
let openBracket = [];

if (data.length % 2 === 0) {
   for (let i = 0; i < data.length; i++) {
      if (data[i] === "(" || data[i] === "{" || data[i] === "[") {
         openBracket.push(data[i]);
      } else if (data[i] === ")" || data[i] === "}" || data[i] === "]") {
         if (openBracket[openBracket.length - 1] === "(" && data[i] === ")") {
            console.log(
               `${openBracket[openBracket.length - 1]} ${data[i]} = ${true}`
            );
            openBracket.pop();
         } else if (
            openBracket[openBracket.length - 1] === "{" &&
            data[i] === "}"
         ) {
            console.log(
               `${openBracket[openBracket.length - 1]} ${data[i]} = ${true}`
            );
            openBracket.pop();
         } else if (
            openBracket[openBracket.length - 1] === "[" &&
            data[i] === "]"
         ) {
            console.log(
               `${openBracket[openBracket.length - 1]} ${data[i]} = ${true}`
            );
            openBracket.pop();
         } else {
            console.log(
               `${openBracket[openBracket.length - 1]} ${data[i]} = ${false}`
            );
            openBracket.pop();
         }
      }
   }
} else {
   console.log("--- Format Error ---");
}
