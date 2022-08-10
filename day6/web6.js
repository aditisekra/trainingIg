
//program1

var sum=0;
var i=0;
while(i >=0){
        i=prompt("enter numbers")
       if(i>=0){
        sum=sum+Number(i);
    }
}
alert(sum);



//program2



let x = Math.floor((Math.random() * 10) + 1);
guessesleft=2
for (i=3;i>=1;i--)

{
    user=prompt("enter the number to guess between 0 to 10")
if(x==user)
{
    alert("Match Found"  + "-" +user )
    alert("Congratulations!! You Won ")
    break;
}
else{
    alert("Match Not Found"  +"-" +user)
    alert("Try Again!! Guesses Left " + guessesleft)

}
guessesleft--
}


//program3




var student = {
    Name: "Aditi",
    Age: 20,
    Address:{
        city: "jaipur",
        state: "rajasthan",
        pincode: 302021
    },
    hobbies: "reading",

    details:function(){
        return this.Name + " " + this.Age + " " + this.Address +" "+ this.hobbies

    } 
}
console.log(student)