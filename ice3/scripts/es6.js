(function(){

    console.log("es6.js loaded");

//tadah(); move to private scope




// ES5
function printNameES5(name){
    return ('ES5 Traditional Function: Hello ' + name);
}


const demoElement1 = document.getElementById('demo_content_1');
demoElement1.innerText = printNameESS('saksham');

// ES6
const printNameArrowFunction = (name) =>{
    return ('ES5 Traditional Function: Hello ' + name);
}


const demoElement2 = document.getElementById('demo_content_2');
demoElement2.innerText = printNameESS('saksham');

// We can also write the above code without the return statement
// Called an implicit return
const printNameArrowImplicit = (name) => 'ES6 Arrow Function: Hello ${name}';
const demoElement3 = document.getElementById('demo_content_3');
demoElement3.innerText=""





//#endregion ES6 Arrow Functions

//#region ES6 Function Parameters

// ES6 default parameters
function es5DefaultParameters (a,b){
    b= (typeof b !== undefined) ? b : 42;
    return a+b ;
}
const demoElement4 = document.getElementById('demo_content_4');
demoElement4.innerText = ` with a but not b : ${es5DefaultParameters(5)}.
with a and b: ${es5DefaultParameters(5,7)}.`


// ES7 Default parameters in arrow functions (OOOOH!)
function es5DefaultParameters (a,b){
    b= (typeof b !== undefined) ? b : 42;
    return a+b ;
}
const demoElement5 = document.getElementById('demo_content_4');
demoElement4.innerText = ` with a but not b : ${es5DefaultParameters(5)}.
with a and b: ${es5DefaultParameters(5,7)}.`

// New 'rest' parameters
function restParameters (a, ...rest){
    console.log(a, ...rest);
    return a + rest
}

restParameters(5,10,15,20,25,30);

//#endregion ES6 Function Parameters

//#region Cleaner Code

//#endregion Cleaner Code

})

