function decomposeUrl(url){
    let arr = url.split(":");
    let protocol = arr[0];
    let argumentsFile = arr[1].substr(arr[1].search("\\?"),arr[1].length);
    let domainString = arr[1].substr(0,arr[1].search("\\?"));
    let domainArr = domainString.split("/");
    let subdomain =  domainArr[0].substr(0,domainArr[0].search("\\."));
    let domainName = domainArr[0].substr(domainArr[0].search("\\.")+1, domainArr[0].length);
    let folderTree = [];
    let targetFile = null;
    for(let i = 1; i < domainArr.length; i++){
        if(i==domainArr.length-1 && domainArr[i].match("\\.")){
            targetFile = domainArr[i];
        }
        else{
            folderTree.push(domainArr[i]);
        }
    }
    return {
            protocol: protocol,
            ipAddress: null,
            subdomain: subdomain,
            domainName: domainName,
            folderTree: folderTree,
            targetFile: targetFile,
            argumentsFile: argumentsFile
    }
}

console.log(decomposeUrl("https:www.google.com/asd/asd/test.js?ok=1"));
console.log(decomposeUrl("https:www.google.com/asd/asd/test?ok=1"));