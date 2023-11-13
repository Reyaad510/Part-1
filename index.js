/*

right click on index.html and do "Open with Live Server"

 window.alert("I love you!");
 */



/* User input 
 let username = window.prompt("what's your name?");
 console.log(username);
 


let username;
document.getElementById("myButton").onclick = function(){

    username = document.getElementById("myText").value;
    document.getElementById("myLabel").innerHTML = "Hello " + username;
    
}
*/




/*   Type Conversion
 
    let x;
    let y;
    let z;


    x = Number("3.14");
    y = String(3.14);
    z = Boolean("Pizza");


*/


/*   Math 
let x = 3 

Math.round(x)
Math.floor(x)
Math.ceil(x)
Math.pow(x,2)
Math.sqrt(x)
Math.abs(x)
maximum = Math.max(x, y, z)
minimum = Mat.min(x, y, z)


*/


/* Counter

let count = 0;

document.getElementById("increase").onclick = function(){

    count++;
     document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("reset").onclick = function(){

    count = 0;
     document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("decrease").onclick = function(){

    count--;
     document.getElementById("countLabel").innerHTML = count;
}

*/


/* RNG 

let x;

document.getElementById("rollBtn").onclick = function(){

    x = Math.floor(Math.random() * 6) + 1;

    document.getElementById("countLabel").innerHTML = x;

}
*/


/* String methods

let userName = "Bro Code"
let phoneNumber = 123-345-5356

console.log(userName.charAt(0))
console.log(userName.indexOf("r"));
console.log(userName.lastIndexOf("r"));
console.log(userName.toUpperCase())
console.log(userName.toLowerCase());

phoneNumber = phoneNumber.replaceAll("-", "/");
console.log(phoneNumber);



slice() extracts a section of a new string and returns it as a new string, without modifying the original string

let firstName;
let lastName;

firstName = userName.slice(0, userName.indexOf(" "))
lastName = userName.slice(username.indexOf(" ") + 1);

*/


/* Checked Property 

document.getElementById("myButton").onclick = function(){

    const visaBtn = document.getElementById("visaBtn");
    const paypalBtn = document.getElementById("paypalBtn");


    if(document.getElementById("visaBtn").checked){
        console.log("You are using Visa!");
    } else if(document.getElementById("paypalBtn")){
        console.log("You are using Paypal!")
    } else {
        console.log("Must select a payment method!")
    }

}
*/

/* Testing New Feature Branch */











