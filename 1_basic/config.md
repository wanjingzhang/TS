1. compilerOptions ts配置文件
      1. *include: 需要被编译的ts。 * 任意的文件 ** 任意的目录
      2. exclude: 需要被排除的ts。默认值："node_modules","bower_components","jspm_packages"
      3. extends：继承xx.json配置文件
      4. files：设置编译的ts文件，详细的
      5. **compilerOption： 编译器选项
        - target 被编译出来的es版本
        - module 生成哪个模块系统代码cmd,commonjs
        - lib 动态添加浏览器中实际使用的库
        - outDir 编译后的文件所在目录
        - outFile 编译为一个文件
        - allowJs 允许编译js文件, 默认不编译js
        - checkJs 是否检查js语法，默认不检查js的ts语法
        - removeComments 删除所有注释
        - noEmit 默认生成输出文件
        - noEmitOnError 默认报错时生成输出文件 
        - 不编译有安全隐患的代码
          ```"noEmit":false,
          "noEmitOnError":true```
        - alwaysStrict 默认不在严格模式，在编译后的代码中使用严格模式
        - noImplicitAny 不允许隐式类型声明 function sum(s1,s2)
        - noImplicitThis 不允许不明确的this  An outer value of 'this' is shadowed by this container.
        - strictNullChecks 在严格的 null检查模式下
        - strict 启用所有严格类型检查选项   