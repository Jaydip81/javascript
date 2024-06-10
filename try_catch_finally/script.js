console.log("start code...")

try {
    let a = 5, b = 0;
    console.log("answer: "+ a.LowerCase());
}
catch (val) {
    if (val.name == ReferenceError){
        console.log("not defined...");
    }
    else if(val.name == TypeError){
        console.log("your not using string...");
    }
    else{
        console.log("exception: " + val.name)
    }
}
finally {
    console.log("code run sussefully...")
}