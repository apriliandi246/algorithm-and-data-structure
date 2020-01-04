// Menggunakan Built in Map Javascript

let map = new Map();


map.set("javascript", "NodeJS, React, VueJS");
map.set("PHP", "Codeigniter, Laravel, Yii");
map.set("Python", "Django, Flask");


console.log(map.get("javascript"));


// menampilkan semua data
console.log(map.entries());