function foo(){
    function bar(a){
        i = 3;
        console.log(a+i);
    }
    for (var i=0; i < 10; i++){
        bar(i*2);
    }
}

foo();


/*
Global creation  foo function yer alıyor
Global executio foo cagriliyor
    Foo Creation
        i undefined ????
        bar functiona yer alıyor
    Foo execution
        for cagriliyor, i =0 bar cagirliyor
        bar Creation
            a undefined
        bar execution
            a = 0
            i = 3
            console.log() 3 u basti
        for cagriliyor, i =3 iken
            i = 4
            bar cagriliyor (a =8)
            bar
                i = 3
                console.log() = 11 (8+3)
       for cagriliyor, i =3 iken
            i = 4
            bar cagriliyor (a =8)
            bar
                i = 3
                console.log() = 11 (8+3)



Note : Her seferinde i = 3 a = 8 toplamlari 11
       surekli 11 basıyor
 */
