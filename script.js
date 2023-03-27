

1-------- Call Apply Bind---------
Call Apply Bind

let employee1 = {
    firstname:"Anuj",
    lastname:"vishwakarma"
}

let employee2 = {
    firstname:"Sourabh",
    lastname:"Kumar"
}


function invite(first,last){
    console.log(first+" "+this.firstname+" "+this.lastname+" "+last);
}


invite.call(employee1,"Hello","Dear");
invite.call(employee2,"Hello","good");

Apply 

let employee1 = {
    firstname:"Anuj",
    lastname:"vishwakarma"
}

let employee2 = {
    firstname:"Sourabh",
    lastname:"Kumar"
}

function invite (first,last){
    console.log(first+" "+this.firstname+" "+this.lastname+" "+" "+last);
}



invite.apply(employee1,["Hello","dear"]);
invite.apply(employee2,["Hello","dear"]);

Bind
let employee1 = {
    firstname:"Anuj",
    lastname:"vishwakarma"
}

let employee2 = {
    firstname:"Sourabh",
    lastname:"Kumar"
}


function invite(first,last){
    console.log(first+" "+this.firstname+" "+this.lastname+" "+last);
}


let employ1call = invite.bind(employee1);
let employ2call = invite.bind(employee2);

employ1call("Hello","dear");
employ2call("Hello","dear");