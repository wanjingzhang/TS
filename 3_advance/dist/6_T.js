"use strict";
// 1. 单个泛型：在定义函数或者类时，如果遇到类型不明确时可以使用泛型
function fn(a) {
    return a;
}
// 使用时，直接调用
fn(10); // T=number,不指定泛型，类型的自动推断
fn('hello'); // 指定泛型
// 2. 多个泛型
function fn2(a, b) {
    console.log(b);
    return a;
}
fn2(123, 'hello');
function fn3(a) {
    return a.length;
}
fn3({ length: 10 }); // 用一个泛型，它为inter的实现类
// 4. 类中使用泛型
class MyClass {
    constructor(name) {
        this.name = name;
    }
}
const mc = new MyClass('celine'); // 用变量表示泛型
