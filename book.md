1. TS编译器功能：检查错误，编译ts为js

1. 标记联盟：ts编译成js后类型被删除，tagged union是在js运行时识别类型的机制 
```
interface Dog {
    kind: 'dog'; // Tagged union
    bark: () => void;
}
interface Cat {
    kind: 'cat'; // Tagged union
    meow: () => void;
}
type Animal = Dog | Cat;

const makeNoise = (animal: Animal) => {
    if (animal.kind === 'dog') {
        animal.bark();
    } else {
        animal.meow();
    }
};

const dog: Dog = {
    kind: 'dog',
    bark: () => console.log('bark'),
};
makeNoise(dog);

// 属性“kind”是一个可以在运行时用来区分 JavaScript 中的对象的值。

```

1. 因此“class”关键字可以在运行时用作类型和值。
   
```
class Animal {
    constructor(public name: string) {}
}
class Dog extends Animal {
    constructor(public name: string, public bark: () => void) {
        super(name);
    }
}
class Cat extends Animal {
    constructor(public name: string, public meow: () => void) {
        super(name);
    }
}
type Mammal = Dog | Cat;

const makeNoise = (mammal: Mammal) => {
    if (mammal instanceof Dog) {
        mammal.bark();
    } else {
        mammal.meow();
    }
};

const dog = new Dog('Fido', () => console.log('bark'));
makeNoise(dog);

// 在 JavaScript 中，“类”具有“prototype”属性，“instanceof”运算符可用于测试构造函数的原型属性是否出现在对象原型链中的任何位置。
// TypeScript 对运行时性能没有影响，因为所有类型都将被删除。然而，TypeScript 确实引入了一些构建时间开销。

```

1. 可以在 TypeScript 中使用的现代 JavaScript 功能：
    * ECMAScript 模块，而不是 AMD 风格的“define”回调或 CommonJS 的“require”语句。
    * 用类代替原型。
    * 变量声明使用“let”或“const”而不是“var”。
    * “for-of”循环或“.forEach”而不是传统的“for”循环。
    * 用箭头函数代替函数表达式。
    * 解构赋值。
    * 简写属性/方法名称和计算属性名称。
    * 默认函数参数

1. 在 TypeScript 安装过程中，会安装两个可执行文件：tsserver，tsc编译器。
    * “tsserver”作为 TypeScript 独立服务器独立服务器包含编译器和语言服务，它主要由集成开发环境 (IDE) 使用来提供 IntelliSense 支持。
    * “tsc”作为 TypeScript 编译器，编辑器和 IDE 可以利用它们来提供智能代码补全。

1. 编译命令
```
    tsc main.ts // Compile a specific file (main.ts) to JavaScript
    tsc src/*.ts // Compile any .ts files under the 'src' folder to JavaScript
    tsc app.ts util.ts --outfile index.js // Compile two TypeScript files (app.ts and util.ts) into a single JavaScript file (index.js)
```
1. 探索类型系统 。。。
















1. [手册](https://www.typescriptlang.org/tsconfig)
1. 工具：madge工具模块
