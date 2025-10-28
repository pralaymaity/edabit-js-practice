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

  deleteAtFirst() {
    let currentNode = this.head;

    this.head = currentNode.next;

    currentNode = null;
  }

  deleteAtLast() {
    let currentNode = this.head;

    while (currentNode.next.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = null;
  }

  deleteAtSpecificPosition(position) {
    let currentNode = this.head;
    let count = position - 2;

    while (currentNode !== null && count > 0) {
      currentNode = currentNode.next;
      count--;
    }

    currentNode.next = currentNode.next.next;
    currentNode.next.prev = currentNode;
  }

  searchElement(el) {
    let currentNode = this.head;

    while (currentNode !== null) {
      if (currentNode.data === el) {
        return "Element Found";
      }
      currentNode = currentNode.next;
    }

    return "Element Not Found";
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

test.insertAtfirst(10);
test.insertAtfirst(20);
test.insertAtfirst(30);
test.insertAtfirst(40);
test.insertAtfirst(50);

// console.log(test.showData());

// test.deleteAtFirst();

//test.deleteAtSpecificPosition(3)

// console.log(test.searchElement(55));

console.log(test.showData());
