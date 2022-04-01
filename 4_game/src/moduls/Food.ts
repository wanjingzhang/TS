// 定义食物类
class Food{
    element:HTMLElement;
    constructor(){
        this.element = document.getElementById('food')!; // 不可能为空

    }
    // 获取食物X轴坐标
    get X(){
        return this.element.offsetLeft;
    }
    get Y(){
        return this.element.offsetTop;
    }
    change(){
        // 生成一个随机位置 0-290
        // 蛇每次移动一格，一个10

        let top = Math.round(Math.random()*29)*10; // 四舍五入取整 [0-29] * 10
        let left = Math.round(Math.random()*29)*10; 
        this.element.style.left = top+'px';
        this.element.style.top = left+'px';
    }
}


export default Food;