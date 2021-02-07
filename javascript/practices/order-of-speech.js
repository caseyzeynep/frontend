
let names =  ["Bilal", "Ilker", "Mehmet", "Sabri", "Selin", "Ufuk", "Volkan", "Zeynep"];

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
function random(){
    let nameLength = names.length;
    for(let i = nameLength-1; i >= 0; i--){
        let randomIndex = getRndInteger(0, (i+1));
        console.log(`${nameLength - i}) ${names[randomIndex]}`);
        names.splice(randomIndex, 1);
    }
}


const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("How many people attend ? ", function(numberOfAttendee) {
    if (numberOfAttendee < names.length && numberOfAttendee >= names.length/2 && numberOfAttendee !== '') {
        rl.question("Who do not attend ? ", function (nameList) {
           nameList = nameList.split(" ");
            for (name of nameList) {
                names = names.filter(function (value, index, arr) {
                    return value.toUpperCase() !== name.toUpperCase();
                });
            }
            random();
            rl.close();
        });
    }
    else if(numberOfAttendee < names.length/2 && numberOfAttendee !== ''){
        rl.question("Who is attending ? ", function (nameList) {
            nameList = nameList.split(" ");
            names = nameList;
            random();
            rl.close();
        });

    }
    else{
        random();
        rl.close();
    }

});

rl.on("close", function() {
    process.exit(0);
});