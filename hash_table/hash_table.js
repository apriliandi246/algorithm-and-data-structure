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
            this.storageLimit = 14;
      }


      // menampilkan data
      printData() {
            return this.storage;
      }


      // menambah data
      addData(key, value) {
            let index = hash(key, this.storageLimit);

            if (this.storage[index] === undefined) {
                  this.storage[index] = [
                        [key, value]
                  ];

            } else {
                  for (let i = 0; i < this.storage[index].length; i++) {
                        if (this.storage[index][i] === undefined) {
                              this.storage[index][i] = [key, value];
                              return;
                        }
                  }

                  this.storage[index].push([key, value]);
            }
      }


      // menghapus data
      removeData(key) {
            let index = hash(key, this.storageLimit);

            if (this.storage[index].length === 1 && this.storage[index][0][0] === key) {
                  delete this.storage[index];
            } else {
                  for (let i = 0; i < this.storage[index].length; i++) {
                        if (this.storage[index][i][0] === key) {
                              delete this.storage[index][i];
                        }
                  }
            }
      }


      // mnencari data
      findData(key) {
            let index = hash(key, this.storageLimit);

            if (this.storage[index] === undefined) {
                  return 'Data not found';

            } else {
                  for (let i = 0; i < this.storage[index].length; i++) {
                        if (this.storage[index][i][0] === key) {
                              return this.storage[index][i][1];
                        } else {
                              return 'Data not found';
                        }
                  }
            }
      }
}


const ht = new HashTable();

ht.addData('farhan', 19);
ht.addData('apri', 18);

ht.removeData('farhan');

ht.addData('farhan', 19);
ht.addData('apriliandi', 20);

ht.removeData('apriliandi');

ht.addData('apriliandi', 20);

console.log(ht.findData('apriliandi'));
console.log(ht.findData('si anu'));