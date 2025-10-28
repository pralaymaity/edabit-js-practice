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
      return this.head = newNode
    }

    newNode.pointer = this.head;
    this.head = newNode;
  }

  deleteAtFirst() {
    let currentNode = this.head;

    this.head = currentNode.pointer;
    currentNode = null;
  }

  deleteAtLast() {
    let currentNode = this.head;

    while (currentNode.pointer.pointer !== null) {

      currentNode = currentNode.pointer;
      
    }
    currentNode.pointer = null

    
  }

  deleteAtSpecificPosition(position){

    let currentNode = this.head
    let counter = position - 2

    while(currentNode !== null && counter > 0){
        currentNode = currentNode.pointer
        counter--
    }
    currentNode.pointer = currentNode.pointer.pointer
    

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
test.insertAtBegining(10);
test.insertAtBegining(20);
test.insertAtBegining(30);
test.insertAtBegining(40);
test.insertAtBegining(50);
test.insertAtBegining(60);

console.log(test.showData());

// test.deleteAtFirst();

// test.deleteAtLast();
// test.deleteAtLast();

test.deleteAtSpecificPosition(4)

console.log(test.showData());
