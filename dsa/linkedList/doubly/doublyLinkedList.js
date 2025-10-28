class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
  }

  insertAtfirst(data) {
    let newNode = new Node(data);

    if (this.head === null) {
      return (this.head = newNode);
    }

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
  }

  insertAtLast(data) {
    let newNode = new Node(data);

    if (this.head === null) {
      return (this.head = newNode);
    }

    let currentNode = this.head;

    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }

    currentNode.next = newNode;
    newNode.prev = currentNode;
  }

  insertAtSpecificPosition(data, position) {
    let newNode = new Node(data);

    let currentNode = this.head;
    let count = position - 2;

    while (currentNode !== null && count > 0) {
      currentNode = currentNode.next;
      count--;
    }

    newNode.next = currentNode.next;
    currentNode.next = newNode;
    newNode.prev = currentNode;
    newNode.next.prev = newNode
  }

  showData() {
    let currentNode = this.head;
    let str = "";

    while (currentNode !== null) {
      str += currentNode.data + "<->";
      currentNode = currentNode.next;
    }

    return str + "null";
  }
}

let test = new DoublyLinkedList();

// test.insertAtfirst(10);
// test.insertAtfirst(20);
// test.insertAtfirst(30);
// test.insertAtfirst(40);
// test.insertAtfirst(50);

test.insertAtLast(10);
test.insertAtLast(20);
test.insertAtLast(30);
test.insertAtLast(40);
test.insertAtLast(50);

console.log(test.showData());

test.insertAtSpecificPosition(60,3)

console.log(test.showData());
