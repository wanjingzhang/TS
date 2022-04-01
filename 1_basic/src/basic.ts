// 1. 字面量赋值
let a:boolean  = false; 
function sum(a:number,b:number): number{
    return a+b;
} 
console.log(sum(12,3));

// 2.字面量类型声明
let aa:10; // 1. a：类型为10
aa = 10;
console.log(aa);
let bb:"male" | "female"; // 2. b:联合类型，来链接多个类型，限制某个变量在某几个值之间
bb = "male";
bb = "female";
let cc:boolean | string; // 3. c:不同类型之间的选择
cc = true;
cc = "hello";

// 3. any, unknown
// let d:any;      // 1.any不仅会关闭自己的类型转换，还会关闭别的对象的类型检查
// d=10;
// d='hello';
// let e:unknown; // 2. 在遇到类型不确定的情况下，尽量用unknown
// e=10;
// e='hello';
// let s:string;
// s = d;          // any可以赋值给任意变量，导致原本string的类型检查失效
// // s = e;       // 3. error: unknown 不能赋值给string
// if(typeof e === "string"){
//     s = e;
// } 
// s = e as string; // 4. 类型断言，可以用来高数解析器变量的实际类型 as 或者 <string>
// s = <string>e;

// 4. void
function fn():string | number{ // 1. 返回值为string或者number类型
    return "1";
}
function fn2():never{           // 2. 永远不会返回结果
    throw new Error('抱错了！')
}

// 5. 对象类型检查
let b: {name:string,age?:number}; // 1. b对象中必须包含name属性，对象解构必须一致。 ?:属性可选
b = {name:'Celine'}
let c:{name:string,[propName:string]:any}; // 2. 只要求有name属性，其他属性不做要求。后面的任意多的参数：属性名为sting类型 值为any.
c = {name:'celine',age:1,class:'1(4)'} 
let d:(a:number,b:number)=>number; //  // 3. 定义函数的参数和返回值。它有2个参数为number类型，而且返回值也是number
d = function(n1:number,n2:number):number{
    return n1+n2;
}

// 6. 字符串数组 string[] Array<number>
let e: string[];    // 1. 字符类型的数组
e = ['a','b','c']
let f: number[];    // 2. 数值类型的数组
f = [1,2,3,4,5]
let g:Array<number>; // 3. 数值类型的数组
g = [4,8,9]

// 7. tuple 元组，固定长度的数组
let h:[string,string];
h = ['hello','abc']

// 8. enum枚举 处理数据，性别有男女
enum Gender{
    Male = 0,
    Female = 1
}
let i:{name:string,gender:Gender}; // 0|1
i = {
    name:'Celine',
    gender: Gender.Male  //0
}
console.log(i.gender === Gender.Male)


// 9. &表示同时
let j: {name:string} & {age:number}; // j对象必须包含name和age属性
j={name:'Celine',age:18}

// 10. 类型的别名 
type myType = 1 | 2 | 3 | 4 | 5;
let l: myType;
let k: myType;
let m: myType;
k = 2;
console.log(k)
