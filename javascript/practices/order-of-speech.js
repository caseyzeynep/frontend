
let names =  ["Bilal", "Ilker", "Mehmet", "Sabri", "Selin", "Ufuk", "Volkan", "Zeynep"];
let nameLength = names.length;

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

for(let i = nameLength-1; i >= 0; i--){
    let randomIndex = getRndInteger(0, (i+1));
    console.log(`${nameLength - i}) ${names[randomIndex]}`);
    names.splice(randomIndex, 1);
}