function getint(id){
    return parseInt(document.getElementById(id).value);
}
function wood(a,msg){
    if( a % 3 == 0){
        msg = "YES";
    }
    else{
        msg = "NO";
    }
    return a , msg;
}
function easy(){
    let b = getint("number");
    let msg = wood(b);
    document.getElementById("dis").innerHTML = msg;
}