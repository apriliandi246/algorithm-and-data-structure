class Stack {
      constructor() {
            this.items = [];
      }

      push(element) {
            this.items.push(element);
      }

      pop() {
            if (this.items.length === 0) return "Data is empty";
            this.items.pop();
      }

      peek() {
            return this.items[this.items.length - 1];
      }

      isEmpty() {
            return this.items.length === 0;
      }

      printStack() {
            let str = "";
            for (let i = 0; i < this.items.length; i++) {
                  str += this.items[i] + " ";
            }
            return str;
      }
}


const stack = new Stack();

stack.push(12);
stack.push(13);
stack.push(14);
stack.pop();

console.log(stack.printStack());
console.log(stack.peek());
console.log(stack.isEmpty());