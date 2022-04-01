// 游戏控制器
import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

class GameControl{
    // 定义三个属性 
    snake:Snake;
    food:Food;
    scorePanel:ScorePanel;
    // 蛇的移动方向
    direction:string = '';
    // 游戏是否结束
    isLive = true;

    constructor(){
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();
        this.init();
    }
    // 游戏初始化方法
    init(){
        // 绑定键盘按下事件
        document.addEventListener('keydown',this.keydownHandler.bind(this));
        // 调用run方法，使蛇移动 
        this.run();
    }

    // 键盘按下响应函数
    // Chrome: ArrowUp, ArrowDown, ArrowLeft, ArrowRight
    // IE: Up, Down, Left, Right
    keydownHandler(event:KeyboardEvent){
        // console.log(event.key) 
        // console.log(this) document
        this.direction = event.key;
    }
    // 创建蛇移动的方法
    run(){
        // 使蛇的位置改变
        // 向上top减少 向下top增加
        // 向左left减少 向右left增加
        let X = this.snake.X;
        let Y = this.snake.Y;
        switch(this.direction){
            case "ArrowUp":
            case "Up":
                Y -= 10;
                break;
            case "ArrowDown":
            case "Down":
                Y += 10;
                break;
            case "ArrowLeft":
            case "Left":
                X -= 10;
                break;
            case "ArrowRight":
            case "Right":
                X += 10;
                break; 
        }
        if(this.checkEat(X,Y)){
            // 食物重置
            this.food.change();
            // 分数增加
            this.scorePanel.addScore();
            // 蛇长长
            this.snake.addBody();
            console.log('吃到食物了');
        }
        try{
            this.snake.X = X;
            this.snake.Y = Y;
        }catch(e){
            // 进入catch，说明出现了异常，游戏结束，弹出一个提示信息
            this.isLive = false;
            alert("Game Over！");
        } 

        // 开启定时器调用
        this.isLive && setTimeout(this.run.bind(this),300 - (this.scorePanel.level-1)*30);
    }
    // 检查蛇是否吃到食物
    checkEat(X:number,Y:number){
        return X === this.food.X && Y === this.food.Y;
    }
}

export default GameControl;

