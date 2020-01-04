// Map terdiri dari "key" dan value.

// Ilustrasi dari map yaitu contohnya pada kamus bahasa inggris, Key nya yaitu bahasa inggrisnya dan Valuenya yaitu terjemahan bahasa indonesia nya.

// contoh lain yaiut daftar no hp. Nama sebagai Key dan nomor hp nya sebagai Valuenya.


class MyMap {
      constructor() {
            this.collection = {};
            this.count = 0;
      }


      // menampilkan berapa data yang tersimpan
      size() {
            return this.count;
      }


      // menambah data
      set(key, value) {
            this.collection[key] = value;
            this.count++;
      }


      // megecek key apakah ada, bila ada benilai true dan sebaliknya
      has(key) {
            return (key in this.collection);
      }


      // mengambil data berdasarkan key
      get(key) {
            return (key in this.collection) ? this.collection[key] : null;
      }


      // mengahpus data
      delete(key) {
            if (key in this.collection) {
                  delete this.collection[key];
                  this.count--;
            }
      }


      // menampilkan semua value dari setiap keys
      values() {
            let result = [];

            for (let key of Object.keys(this.collection)) {
                  result.push(this.collection[key]);
            }

            return (result.length > 0) ? result : null;
      }


      // menghapus semua data
      clear() {
            this.collection = {};
            this.count++;
      }
}


let map = new MyMap();


map.set("eat", "makan");
map.set("water", "air");
map.set("air", "udara");
map.delete("air");


console.log(map.has("water"));
console.log(map.get("air"));
console.log(map.values());
console.log(map.size());
console.log(map.collection);