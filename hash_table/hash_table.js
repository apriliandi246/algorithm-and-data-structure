const hash = (string, max) => {
      let hash = 0;

      for (let i = 0; i < string.length; i++) {
            hash += string.charCodeAt(i);
      }

      return hash % max;
}


class HashTable {
      constructor() {
            this.storage = [];
            this.storageLimit = 5;
      }

      print() {
            return this.storage;
      }


      // menambah data
      add(key, value) {
            let index = hash(key, this.storageLimit);

            if (this.storage[index] === undefined) {
                  this.storage[index] = [{
                        key,
                        value
                  }];

            } else {
                  let inserted = false;

                  for (let i = 0; i < this.storage[index].length; i++) {
                        if (this.storage[index][i][0] === key) {
                              this.storage[index][i][1] = value;
                              inserted = true;
                        }
                  }

                  if (inserted === false) {
                        this.storage[index].push({
                              key,
                              value
                        });
                  }
            }
      }


      // mencari data
      lookup(key) {
            // let index = hash(key, this.storageLimit);

            // if (this.storage[index].length === 1) {
            //       return this.storage[index];

            // } else if (this.storage[index].length > 1) {
            //       for (let i = 0; i < this.storage[index].length; i++) {
            //             if (this.storage[index][i][0] === key) {
            //                   return this.storage[index][i];
            //             }
            //       }

            // } else {
            //       return undefined;
            // }
      }


      // menghapus data
      remove(key) {
            let index = hash(key, this.storageLimit);

            if (this.storage[index].length === 1 && this.storage[index][0].key) {
                  delete this.storage[index][0];
            }
      }
}


const ht = new HashTable();

ht.add("farhan", 19);
ht.add("parhan", 19);
ht.add("apriliandi", 19);


console.log(ht.print());

console.log("\n");

ht.remove("apriliandi");

console.log(ht.print());

console.log("\n");

ht.add("apriliandi");

console.log(ht.print());