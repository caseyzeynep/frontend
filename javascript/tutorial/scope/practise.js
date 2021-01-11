function setB(a){
    var b= a +3;
    function setC(){
        function setD(){
            var d = c +3;
            console.log(c);
            console.log(d);
        }

        const c = b +3;
        setD();

    }
    setC();
    b+=7;
    console.log(b);
}
setB(1);


//