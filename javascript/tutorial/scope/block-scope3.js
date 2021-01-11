function foo(){
    function bar(a){
        i = 3;
        console.log(a+i);
    }
    for (let i=0; i < 10; i++){
        bar(i*2);
    }
}
foo();
console.log(i);

/* OUTPUT:
3
5
7
9
11
13
15
17
19
21
3
Note: i = 3 satırı globalde i olusturup 3 ise esitledi
      for daki i let den dolayı hiç degismedi
      döngü her seferinde 0,2,4 gibi cift sayilarin iki katının 3(global i) le toplamini basip bitti

 */