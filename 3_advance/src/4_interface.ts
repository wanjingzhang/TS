(function(){
    // 1. 描述一个对象的类型
    type myType = {
        name:string,
        age:number,
        [propname:string]:any
    } 
    const obj:myType = {
        name:"ss",
        age:11,
        class:"14"
    }
    console.log(obj);

    // 2. 接口用来定义一个类结构，用来定义对象应该包含的属性和方法，接口也可以作为类型声明去使用
    //      - 1. 把接口当作类型去使用
    interface myInterface{
        name:string;
        age:number;
    }
    interface myInterface{ // 接口自动合并
        gender:string;
    }
    const obj2:myInterface ={
        name:'bb',
        age:22,
        gender:'male',
    }
    console.log(obj2);

    //      - 2. 接口在定义类的时候，限制类的结构，类似抽象类
    //              接口中所有的属性都不能有实际的值，接口只定义对象的结构，不考虑实际值
    interface myInter{
        name:string;
        sayHello():void;
    }
    class MyClass implements myInter{
        name:string;
        constructor(name:string){
            this.name = name;
        }
        sayHello(): void {
            console.log('hello')
        }
    }


})();