const testValue ={
    'key':'value',
    'anotherkey':235,
    'complexkey':{
        'insidekey1':'insidevalue1'
    },
    'arraykey':[1,2,4],
    5:'some numbered index'
};

//console.log(testValue);
//console.log(testValue.key);
//console.log(testValue.complexkey);
//console.log(testValuecomplexkey.insidekey1);
//console.log(testValue['key']);
//console.log(testValue[5]);

//console.log(JSON.stringify(testvalue));

//const anotherkey = testValue.anotherkey;
const{anotherKey , arrayKey, complexkey} = testValue;
console.log(anotherKey);
console.log(arrayKey);
console.log(complexkey);