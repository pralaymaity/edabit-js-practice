class Node {
  constructor(data) {
    this.data = data;
    this.pointer = null;
  }
}

class singlyLinkedList {
  constructor() {
    this.head = null;
  }

  insertAtBegining(data) {
    let newNode = new Node(data);

    if (this.head === null) {
      return this.head = newNode;
    }

    newNode.pointer = this.head;
    this.head = newNode;
  }

  insertAtLast(data){
    let newNode = new Node(data)

    if (this.head === null){
        return this.head = newNode
    }

    let currentNode = this.head

    while(currentNode.pointer !== null){
        currentNode = currentNode.pointer

    }
    currentNode.pointer = newNode

  }

  inserAtSpecificPosition(data, position) {
    let newNode = new Node(data);

    let currentNode = this.head;
    let counter = position - 2;

    while (currentNode !== null && counter > 0) {
      currentNode = currentNode.pointer;
      counter--;
    }
    newNode.pointer = currentNode.pointer;
    currentNode.pointer = newNode;
    
  }

  showData() {
    let currentData = this.head;

    let str = "";

    while (currentData !== null) {
      str += currentData.data + "->";
      currentData = currentData.pointer;
    }

    return str + "null";
  }
}

let test = new singlyLinkedList();
// test.insertAtBegining(10);
// test.insertAtBegining(20);
// test.insertAtBegining(30);
// test.insertAtBegining(40);


test.insertAtLast(10);
test.insertAtLast(20);
test.insertAtLast(30);
test.insertAtLast(40);
test.insertAtLast(50);

console.log(test.showData());


test.inserAtSpecificPosition(25, 4);

console.log(test.showData());
