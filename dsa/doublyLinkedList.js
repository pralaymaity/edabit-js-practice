class Node {
  constructor(data) {
    this.data = data;
    this.nextPointer = null;
    this.prevPointer = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
  }

  insertAtFast(data) {
    let newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.nextPointer = this.head;
      this.head.prevPointer = newNode;
      this.head = newNode;
    }
  }

  insertAtLast(data) {
    let newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
    } else {

      let current = this.head;

      while (current.nextPointer !== null) {
        current = current.nextPointer;
      }
      current.nextPointer = newNode;
      newNode.prevPointer = current;
    }
  }

  showInfo() {
    let list = this.head;

    let str = "";

    while (list !== null) {
      str += list.data + "<->";
      list = list.nextPointer
    }

    return str + "null";
  }
}

let test = new DoublyLinkedList();


test.insertAtFast([10,20,30,40]);

// test.insertAtLast([10,20,30,40]);

console.log(test.showInfo());
