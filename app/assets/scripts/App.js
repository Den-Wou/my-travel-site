var $ = require('jquery');
var Person = require('./modules/Person');

alert('abc 321');

var john = new Person("John Doe","Blue");
john.greet();

var jane = new Person("Jane Smith","green");
jane.greet();

$('h1').remove();