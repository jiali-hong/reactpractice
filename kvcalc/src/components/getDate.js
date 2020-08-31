const getDate = () => {
    let d = new Date();
    let str = d.getFullYear() + '/' + ("0"+(d.getMonth() +1)).slice(-2) + '/' + ("0" + d.getDate()).slice(-2)
    return str;
}


export default getDate;