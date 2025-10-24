

class Node {
    constructor(data){

        this.data = data
        this.pointer = null

    }
}


class List {

    constructor(){
        this.head = null
    }

    insertAtFirst(data){
        let newNode = new Node(data)

        newNode.pointer = this.head

        this.head = newNode
    }

    // insertAtLast(data){

    //     let newNode = new Node(data)

    //     if( this.head === null){
    //         this.head = newNode
    //         return
    //     }

    //     let currennt = this.head

    //     while(currennt.pointer !== null){
    //         currennt = currennt.pointer
    //     }

    //     currennt.pointer = newNode

    // }

    showList (){
        let present = this.head
        let str = ""

        while(present !== null){
            str += present.data + "->"

            present = present.pointer
        }

        console.log(`${str} null`);
        

        return str
    }

}


let l = new List()

// l.insertAtFirst(10)
// l.insertAtFirst(20)
// l.insertAtFirst(30)

l.insertAtLast(10);
l.insertAtLast(20);
l.insertAtLast(30);
l.insertAtLast(40);

l.showList()