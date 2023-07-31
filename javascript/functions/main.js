function convertMinuteToSeconds(minutes) {
    return minutes * 60;
}

function greet(name) {
    return 'Hey, ' + name;
}

function getArea(width, height) {
    return width * height;
}

var getAreaResult = getArea(15, 20);
console.log(getAreaResult);

const arr = [
    {la: 37, lo: 125},
    {la: 37.11, lo: 125.223}
  ];

  for (var i = 0; i < arr.length; i++) {
    var newArr = arr[i];
    console.log(newArr);
  }