const obj = {yourSignature: ""};

function signYourName(obj){
    Object.preventExtensions(obj);
    obj.yourSignature = "Whatever";
    obj.spouoseSignature = "Nice try";
    return obj;
}

console.log(signYourName(obj));