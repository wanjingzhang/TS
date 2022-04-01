"use strict";
// 抽象类
(function () {
    // 抽象类 不能实例化，专门被用来继承
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    class Dog extends Animal {
        // 实现抽象类的抽象方法
        sayHello() {
            console.log("woof!");
        }
    }
    const dog = new Dog("Floppy");
    dog.sayHello();
    // 不可以实例化抽象类实例
    // const an = new Animal("abc"); // Cannot create an instance of an abstract class.
})();
