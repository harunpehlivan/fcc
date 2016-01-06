/*
Fill in the object constructor with the methods specified in the tests.
Those methods are getFirstName(), getLastName(), getFullName(), setFirstName(first), setLastName(last), and setFullName(firstAndLast).
All functions that take an argument have an arity of 1, and the argument will be a string.
These methods must be the only available means for interacting with the object.
*/

var Person = function(firstAndLast) {
    this.getFirstName = function() {
        return firstAndLast.split(' ')[0];
    };
    this.getLastName = function() {
        return firstAndLast.split(' ')[1];
    };
    this.getFullName = function() {
        return firstAndLast;
    };
    this.setFirstName = function(name) {
        firstAndLast = name + " " + firstAndLast.split(" ")[1];
    };
    this.setLastName = function(name) {
        firstAndLast = firstAndLast.split(" ")[0] + " " + name;
    };
    this.setFullName = function(name) {
        firstAndLast = name;
    };
};

var bob = new Person('Bob Ross');
bob.getFullName();
