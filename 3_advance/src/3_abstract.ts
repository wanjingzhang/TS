// 抽象类
(function(){
    // 抽象类 不能实例化，专门被用来继承
    abstract class Animal{  
        name:string; 
    
        constructor(name:string){ 
            this.name = name; 
        }
        // 抽象方法 没有方法体，只能定义在抽象类里，子类必须对抽象方法重写
        abstract sayHello():void;
    }  
    
    class Dog extends Animal{  
        // 实现抽象类的抽象方法
        sayHello(){ // Non-abstract class 'Dog' does not implement inherited abstract member 'sayHello' from class 'Animal'.
            console.log("woof!")
        }
    } 
    const dog = new Dog("Floppy");
    dog.sayHello();

    // 不可以实例化抽象类实例
    // const an = new Animal("abc"); // Cannot create an instance of an abstract class.

})()
