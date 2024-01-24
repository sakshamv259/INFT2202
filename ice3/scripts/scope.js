//scope demo
function outsideFunction(){
    console.log('im outside');

    function insideFunction(){
        let privateMember = 12345;
        console.log('i have a private number whoes value is ${privateMember}');
    }

    const returnValue ={
        insideFunction : insideFunction
    }
    return returnValue;
    
}

outsideFunction();
  //insideFunction();// refference error
// #region ES6 Arrow Functions
const instance = outsideFunction();
instance.insideFunction();