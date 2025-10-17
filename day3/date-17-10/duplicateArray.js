

let arr = [1,2,2,3,3,3,3,4]



function duplicate (arr){

    let store = []

    for(let i = 0; i < arr.length; i++){

        if(arr[i] !== arr[i+1]){
            store.push(arr[i])
        } 
    
    }

    return store

}

console.log(duplicate(arr));


