class Snake{
    // 表示蛇的元素
    head: HTMLElement;
    // 蛇的身体
    bodies: HTMLCollection;
    // 获取蛇的容器
    element: HTMLElement;

    constructor(){
        this.element = document.getElementById('snake')!; 
        this.head = document.querySelector('#snake > div') as HTMLElement; // 只取第一个div，断言为html元素
        // document.querySelectorAll() // nodelist 返回一个死数组,不会动态刷新
        this.bodies = document.getElementById('snake')!.getElementsByTagName('div'); // Element
 
    }
    // 获取蛇头的坐标
    get X(){
        return this.head.offsetLeft;
    }
    get Y(){
        return this.head.offsetTop;
    }
    // 设置蛇头的坐标
    set X(value:number){
        if(this.X === value)return;
        // X值的合法范围
        if(value <0 || value > 290){
            // 进入判断蛇撞墙了，抛出异常
            throw new Error('蛇撞墙了！')
        }
        // 判断蛇是否掉头了
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value){
            console.log('水平掉头')
            // 如果掉头了，让蛇继续向右
            if(value > this.X){
                value = this.X - 10;
            }else{
                value = this.X + 10;
            }
        }

        // 移动身体
        this.moveBody();
        this.head.style.left = value + 'px';
        // 检查是否撞到自己
        this.chectHeadBody();
    }
    set Y(value:number){
        if(this.Y === value)return;
        if(value <0 || value > 290){
            // 进入判断蛇撞墙了
            throw new Error('蛇撞墙了！')
        }
        // 判断蛇是否掉头了
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value){
            console.log('Y掉头')
            // 如果掉头了，让蛇继续向上
            if(value > this.Y){
                value = this.Y - 10;
            }else{
                value = this.Y + 10;
            }
        }
        // 移动身体
        this.moveBody();
        this.head.style.top = value + 'px';
        // 检查是否撞到自己
        this.chectHeadBody();
    }
    // 蛇增加身体的方法
    addBody(){
        // 像element尾部追加一个div
        this.element.insertAdjacentHTML('beforeend','<div></div>')
    }
    // 移动身体
    moveBody(){ 
        // 将后面身体设置为前面身体的位置，第二截身体是蛇头的位置
        // 身体第二截的位置= 蛇头的位置
        // 身体第三截的位置=身体第二截的位置
        for(let i = this.bodies.length-1;i>0;i--){
            // 获取前边身体的位置
            let X = (this.bodies[i-1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i-1] as HTMLElement).offsetTop; 
            (this.bodies[i] as HTMLElement).style.left = X + 'px';
            (this.bodies[i] as HTMLElement).style.top = Y + 'px'; 
        } 
    }
    chectHeadBody(){
        // 获取所有身体，检查是否蛇头的坐标发生重叠
        for(let i=1;i<this.bodies.length;i++){
            let bd = this.bodies[i] as HTMLElement;
            if(this.X === bd.offsetLeft && this.Y === bd.offsetTop){
                // 进入判读说明蛇头撞到了身体
                throw new Error('撞到了自己！')
            }
        }
    }
}

export default Snake;