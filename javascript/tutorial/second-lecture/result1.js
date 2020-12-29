const a = 2;
let b = '0';
switch(a){
    case 1:
        b += 1;
        break;
    case 2:
        b += 2;
    case 3:
        b += 3;
        break;
    default:
        console.log("Olmadı pardon");
};
console.log(b);