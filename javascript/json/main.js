var array = [
    {
    'isbn': 1,
    'title': 5,
    'author': 'g'
    },
    {
        'isbn': 'c',
        'title': 't',
        'author': 'y'
    },
    {
        'isbn': 'f',
        'title': 'i',
        'author': 'z'
    }
];

console.log(array, typeof array);

var skip = JSON.parse(JSON.stringify(array));
console.log('skip:', skip);

var toJson = JSON.stringify(array);
console.log(toJson, typeof toJson);

var backtoObject = JSON.parse(toJson);
console.log(backtoObject, typeof backtoObject);
console.log(backtoObject, Array.isArray(backtoObject));

var myInfo = '[{"age": 25, "name": "Heesoo Kim"}]';
console.log(myInfo, typeof myInfo);

var parJson = JSON.parse(myInfo);
console.log(parJson, typeof parJson);

for(var i in array){
    console.log(i);
    console.log(array[i])

    var item = array[i];
    for(var j in item){

        console.log(j);
        console.log(item[j])
    }

}