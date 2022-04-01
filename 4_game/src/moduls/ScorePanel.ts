// 定义记分牌的类
class ScorePanel{
    // 分数和等级
    score = 0;
    level = 1; 
    // 分数和等级所在的元素
    scoreEle:HTMLElement;
    levelEle:HTMLElement; 
    // 设置变量限制等级
    maxLevel:number;
    // 设置个变量表示多少分升级
    upScore:number;
    constructor(maxLevel:number=10,upScore:number=2){ //默认值
        this.scoreEle = document.getElementById('score')!;
        this.levelEle = document.getElementById('level')!;
        this.maxLevel = maxLevel;
        this.upScore = upScore;
    }
    addScore(){
        // 使分数自增 
        this.scoreEle.innerHTML = ++this.score + '';
        // 判断分数是多少
        if(this.score % this.upScore === 0){
            this.levelUp();
        }
    }
    levelUp(){
        // 提升等级
        if(this.level < this.maxLevel){
            this.levelEle.innerHTML = ++this.level + '';
        } 
    }
}


export default ScorePanel;