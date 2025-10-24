
class Person {

    constructor(){
        this.stack = []
    }

    push(data){
        this.stack.push(data)
    }

    pop(){
        this.stack.shift()
    }

    showData(){
        let str = ""
        for(let i = 0; i < this.stack.length; i++){
            str += this.stack[i]
            str += "\n"
        }
        return str
    }
}

let p1 = new Person();

p1.push(10);
p1.push(20);
p1.push(30);
p1.push(40);
p1.push(50);
console.log(p1.showData());

p1.pop();
p1.pop();

console.log(p1.showData());