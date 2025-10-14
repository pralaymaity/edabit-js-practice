
//Native Promise, Introducing the Executor


let promise = new Promise((resolve , reject)=>{

    setTimeout(()=>{

        resolve("Edabit")

    },2000)
},)

promise.then((value)=>{
    console.log(value);
    
})


