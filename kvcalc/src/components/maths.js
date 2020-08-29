const getRandomNum = (min, max) => {
    let num = Math.floor(Math.random() * (max - min + 1) ) + min;
    return num;
}
const getRandomOp = () => {
    let ops = ['+','-','×','÷'];
    let op = ops[getRandomNum(0,3)];
    return op;
}
const getRandomFormula = () => {
    let x = getRandomNum(2,100);
    let y = getRandomNum(2,100);
    let op = getRandomOp();
    let ans;

    switch (op) {
        case '-':
            x = getRandomNum(y+2,200);
            ans = x-y;
            break;
        case '×':
            x = getRandomNum(2,13);
            ans = x*y;
            break;
        case '÷':
            x = getRandomNum(2,13);
            let a = x;
            x = x*y;
            y = a;
            ans = x/y;
            break
        default:
            ans = x+y;
    }

    return {
        x,
        y,
        op,
        ans,
        problem: `${x} ${op} ${y} `,        
    };

}

export default getRandomFormula;