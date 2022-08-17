//program1

function sum(){
    var a = 0;
    for(var i = 0;i<arguments.length;i++){
        a = a + arguments[i];
    }
    return a;
}
console.log(sum(1,2,3,4,5));






//program2

function details(first,last,age){
    return[first,last,age];
}
var first = "aditi";
var last = "agarwal";
var age = 20;
var det = details(first,last,age);
console.log(det);





//program3

function display(){


    console.log("hey! lets display this whole function in console");


}
console.log(display.toString());






//program4

function stringg(line)
{
    newline=line.split(" ");

    if(newline[0] != "New"){
        line = "New " + line;
        return line; 
    }
    newline.shift();
    line = newline.join(" ");
    return line; 
}
var text = "New hello my name is aditi";
var text1 = "aditi agarwal";

console.log(stringg(text));
console.log(stringg(text1));







//program5

var empt = "";
var text1 = "Hey! how are you?";
function string1(original){
    if(original.length>=3){
        new_string = empt.concat(original.slice(0,3)+original.slice(-3));
        return new_string;
    }
    return original;
    
}
console.log(string1(text1));