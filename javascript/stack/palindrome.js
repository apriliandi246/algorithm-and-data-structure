let word = "racecar";
let letters = [];
let reverse_word = "";

// put letters of word into the stack
for (let i = 0; i < word.length; i++) {
   letters.push(word[i]);
}

for (let i = 0; i < word.length; i++) {
   reverse_word += letters.pop();
}

// check
if (reverse_word === word) {
   console.log(`${word} is palindrome`);
} else {
   console.log(`${word} is not palindrome`);
}
