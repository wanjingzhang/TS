(function(){
    class Person{
        public _name:string; // 全部都能访问
        private _age:number; // 私有属性只能在类内部修改
        private _gender:string;
        protected _school:string; // 保护类只能在当前类或者是子类中使用
        constructor(name:string,age:number,gender:string,school:string){
            this._name = name;
            this._age = age;
            this._gender = gender;
            this._school = school;
        }
        // 读取属性
        getAge(){
            return this._age;
        }
        // 设置属性
        setAge(age:number){
            if(age >= 0){ 
                this._age = age;
            }
        }
        // ts中设置getter方法
        get gender(){
            return this._gender + ":get()";
        }
        set gender(value:string){
            this._gender = value;
        }
    }   
    const person = new Person('celine',2,'female','hongqiao');
    // 属性在对象中设置，可以任意的被修改，导致数据变得不安全
    person._name = "celine2";
    // person._age = -38; // 'age' is private and only accessible within class 'Person'.
    person.setAge(-38);  
    person.gender = "male";
    console.log(person);
    console.log(person.gender); // female:get()

    // 在属性定义在构造函数中
    class C{
        constructor(public name:string,public age:number){ 
        }
    }
    const c = new C('xxx',11)
})()