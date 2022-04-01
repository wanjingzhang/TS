class Animal{
    // name = "floppy";
    // age = 3;

    // 构造函数的属性
    name:string;
    age:number;

    constructor(name:string,age:number){ 
        this.name = name;
        this.age = age;
    }
    sayHello(){
        // 当前调用方法的对象
        console.log(this.name);
    } 
}
const animal = new Animal("celine",18);
const animal2 = new Animal("celine2",2);
animal.sayHello();
animal2.sayHello(); 

class Dog extends Animal{
    age: number;

    constructor(name:string,age:number){
        super(name,age); // 在子类构造函数中，必须super调用父类的构造函数
        this.age = age;
    }

    sayHello(){
        // 调用父对象的方法
        super.sayHello();
    }
}
const dog = new Dog("celine3",3);
dog.sayHello();