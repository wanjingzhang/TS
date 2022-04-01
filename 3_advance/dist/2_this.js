"use strict";
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        // 当前调用方法的对象
        console.log(this.name);
    }
}
const animal = new Animal("celine", 18);
const animal2 = new Animal("celine2", 2);
animal.sayHello();
animal2.sayHello();
class Dog extends Animal {
    constructor(name, age) {
        super(name, age); // 在子类构造函数中，必须super调用父类的构造函数
        this.age = age;
    }
    sayHello() {
        // 调用父对象的方法
        super.sayHello();
    }
}
const dog = new Dog("celine3", 3);
dog.sayHello();
