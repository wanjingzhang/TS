"use strict";
// 使用class定义类
class Person {
    constructor() {
        // 实例属性 可以被修改
        this.name = 'celine';
        // 只读属性 无法修改
        this.class = "一年级";
        this.surname = "Zhang";
    }
    // 定义方法
    sayHello() {
        console.log("Hello 大家好！");
    }
    // 静态方法 直接类可以调用
    static sayHello2() {
        console.log("Hello 大家好2！");
    }
}
// 静态属性
Person.age = 18;
// 只读静态属性
Person.department = "计算机";
const per = new Person();
// console.log(per)
// console.log(per.name,Person.age,Person.department);
per.sayHello();
Person.sayHello2();
