const wordsOrder = {
    getRandomArray: (array) => {
        let words = [...array];
        let ret = [];
        let len;
        let num;
        const getNum = (min, max) => {
        let num = Math.floor(Math.random() * (max - min + 1) ) + min;
        return num;
        }
        while (words.length !== 0){
            len = words.length;
            num = getNum(0,len-1);
            ret.push(words[num]);
            words.splice(num, 1);
        }
        return ret;
    }
    ,
    getOrderedArray: (array) => {
        let ret = [...array];
        ret.sort();
        return ret;
    }
}

export default wordsOrder;