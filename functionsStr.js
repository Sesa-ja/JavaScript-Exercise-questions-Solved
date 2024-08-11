// Building and calling functions
//Code simple functions that can accept an array and iterate through it  

function listArrayItems(arr){
    for(var i =0; i< arr.length; i++){
        if (arr[i]=="red"){
            console.log(i*100, "tomato!");
        } else{
            console.log(i*100, arr[i]);
        }
        
    }
}

var colors =['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink']
listArrayItems(colors);



