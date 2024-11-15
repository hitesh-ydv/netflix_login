let fullName = prompt("Enter your full name without spaces");
let output = "@"+`${fullName}`+fullName.length;
if(fullName.length<5){
    console.log("Min. five character required")
}else{
    console.log(output)
}