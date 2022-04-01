// 1. 单个泛型：在定义函数或者类时，如果遇到类型不明确时可以使用泛型
function fn<T>(a:T):T{ // T就是T类型，它只有在函数运行时才可以确定
    return a;
}
// 使用时，直接调用
fn(10)// T=number,不指定泛型，类型的自动推断
fn<string>('hello')// 指定泛型
// 2. 多个泛型
function fn2<T,K>(a:T,b:K):T{
    console.log(b);
    return a;
}
fn2<number,string>(123,'hello');
// 3. 实现了某个接口的范型
interface Inter{
    length:number;
}
function fn3<T extends Inter>(a:T):number{// 泛型T必须时Inter的一个实现类(子类)
    return a.length;
}
fn3({length:10})// 用一个泛型，它为inter的实现类
// 4. 类中使用泛型
class MyClass<T>{
    name:T;
    constructor(name:T){
        this.name = name;
    }
}
const mc = new MyClass<string>('celine'); // 用变量表示泛型