let arr15 = [3,2,1];
console.log( arr15);
for (let i = 0; i < arr15.length - 1; i++) { // hangi sort
    for (let j = i; j < arr15.length; j++) {
        if(arr15[i] > arr15[j]) {
            const temp = arr15[i];
            arr15[i] = arr15[j];
            arr15[j] = temp;
        }

    }
    console.log( arr15);
}
arr15 = [3,2,1];
console.log("hello world");
console.log( arr15);
for (let i = 0; i < arr15.length - 1; i++) { // hangi sort
    for (let j = 0; j < arr15.length-i-1; j++) {
        if(arr15[j] > arr15[j+1]) {
            const temp = arr15[j];
            arr15[j] = arr15[j+1];
            arr15[j+1] = temp;
        }

    }
    console.log( arr15);
}