class QElement {
	constructor(element, priority) {
		this.element = element;
		this.priority = priority;
	}
}

class PriorityQueue {
	constructor() {
		this.items = [];
	}

	enqueue(element, priority) {
		let qElement = new QElement(element, priority);
		let contain = false;

		for (let i = 0; i < this.items.length; i++) {
			if (this.items[i].priority > qElement.priority) {
				this.items.splice(i, 0, qElement);
				contain = true;
				break;
			}
		}

		if (!contain) {
			this.items.push(qElement);
		}
	}

	dequeue() {
		if (this.isEmpty()) {
			return "Underflow";
		}
		return this.items.shift();
	}

	front() {
		if (this.isEmpty()) {
			return "No elements in Queue";
		}
		return this.items[0];
	}

	rear() {
		if (this.isEmpty()) {
			return "No elements in Queue";
		}
		return this.items[this.items.length - 1];
	}

	isEmpty() {
		return this.items.length === 0;
	}

	printQueue() {
		let str = "";
		for (let i = 0; i < this.items.length; i++) {
			str += this.items[i].element + " | ";
		}
		return str;
	}
}

let priorityQueue = new PriorityQueue();

console.log(priorityQueue.isEmpty());

console.log(priorityQueue.front());

priorityQueue.enqueue("farhan", 2);
priorityQueue.enqueue("parhan", 1);
priorityQueue.enqueue("apriliandi", 1);
priorityQueue.enqueue("parhan apriliandi", 2);
priorityQueue.enqueue("farhan apriliandi", 3);
priorityQueue.enqueue("i dont know", 0);
priorityQueue.enqueue("i dont care", 5);
priorityQueue.enqueue("who care", 4);
priorityQueue.dequeue();

console.log(priorityQueue.printQueue());

console.log(priorityQueue.items);

console.log(priorityQueue.rear());
