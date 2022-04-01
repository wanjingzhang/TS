define(["require", "exports", "./m.js"], function (require, exports, m_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let a = 'abc';
    let hh = 10;
    // hh = "abcd"
    console.log(m_js_1.hi);
    // 1. noImplicitAny
    // function sum(s1,s2){
    //     return s1+s2
    // }   
    // 2. noImplicitThis
    // function fn2(){  // 'this' implicitly has type 'any' because it does not have a type annotation.
    //     console.log(this);
    // }
    // 3. strictNullChecks
    let box1 = document.getElementById("box");
    if (box1 !== null) {
        box1.addEventListener('click', function () {
            alert('hello');
        });
    }
    // 或
    box1 === null || box1 === void 0 ? void 0 : box1.addEventListener('click', function () {
        alert('hello');
    });
});
