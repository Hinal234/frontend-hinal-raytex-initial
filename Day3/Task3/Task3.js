function fibonacci(){
    var num = document.getElementById("number").value;
    var n1 = 0;
    var n2 = 1;
    var n3;
    console.log("fibonacci Series:");

    for(let i=1;i<=num;i++){
        console.log(n1);
        n3 = n1+n2;
        n1 = n2;
        n2 = n3;
    }

}