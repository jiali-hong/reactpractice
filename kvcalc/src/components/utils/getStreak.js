const getStreak = list => {
    if (list.length === 0){
        return 0
    }
    const array = [...list],
        d = new Date(),
        thisYear = d.getFullYear(),
        thisMonth = ("0"+(d.getMonth() +1)).slice(-2),
        thisDate = ("0" + d.getDate()).slice(-2),
        str = thisYear + '/' + thisMonth + '/' + thisDate;
    array.sort();
    array.reverse();

    if (array[0] !== str){
        return 0;
    }else {
        if (array.length === 1 ){
            return 1;
        }
        let i = 1,
            day = new Date(array[0]),
            pd = new Date(array[0]),
            ret = i;
        pd.setDate(pd.getDate() + 1);
        while (i < array.length){
            pd.setDate(pd.getDate() - 1);
            if (pd.getTime() === day.getTime()){
                ret = i;
            }else{
                return ret;
            }
            i++;
            day = new Date(array[i-1]);
        }
        return i;
    }
}


export default getStreak;

