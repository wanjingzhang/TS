// 使用class定义类
class Person{
    // 实例属性 可以被修改
    name: string = 'celine';
    // 静态属性
    static age: number = 18;
    // 只读属性 无法修改
    readonly class: string = "一年级"
    // 只读静态属性
    static readonly department: string = "计算机"
    surname = "Zhang";

    // 定义方法
    sayHello(){
        console.log("Hello 大家好！");
    }
    // 静态方法 直接类可以调用
    static sayHello2(){
        console.log("Hello 大家好2！");
    }
    
}
const per = new Person();
// console.log(per)
// console.log(per.name,Person.age,Person.department);
per.sayHello();