"use strict";
(function () {
    const obj = {
        name: "ss",
        age: 11
    };
    console.log(obj);
    const obj2 = {
        name: 'bb',
        age: 22,
        gender: 'male',
    };
    console.log(obj2);
    class MyClass {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log('hello');
        }
    }
})();
