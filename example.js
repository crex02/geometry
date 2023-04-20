// ESEMPIO 1

const pippo = {
    name :'Davide',
    surname: 'Cresta',
    age: 20,
}

console.log(pippo);
console.log(JSON.stringify(pippo));

const seg1 = new Segment(1,1,3,5);

console.log(seg1);
console.log(JSON.stringify(seg1));

const string1 = '{"name":"Davide","surname":"Cresta","age":20}';

const strin1ToObject = JSON.parse(string1);
console.log(strin1ToObject);

// ESEMPIO 2

fetch('./config.json').then(transformResultToJson).then(logData);

function transformResultToJson(result) {
    return result.json();
}

function logData(data) {
    console.log(data);
}

