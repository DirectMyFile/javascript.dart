var x = [1, 2, 3];

for (var i in x) {
  console.log("Entry at " + i + " is " + x[i]);
}

var map = {
  "Hello": "World"
};

console.log(map);

var $ = {};

$.sayHello = function () {
  console.log("Hello World!");
};

$.sayHello();
