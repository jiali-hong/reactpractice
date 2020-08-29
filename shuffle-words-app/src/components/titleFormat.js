const titleFormat = {
    getFormatedTitle : (title) => {
        if (title === undefined) {
            return ''
        }
        let newTitle = title.split('_');
        if (newTitle.length === 1){
            return title;
        }
        newTitle = newTitle.join(' ');
        return newTitle;
    },
    getUnFormatedTitle : (title) => {
        let newTitle = title.split(' ');
        if (newTitle.length === 1){
            return title;
        }
        newTitle = newTitle.join('_')
        return newTitle;
    }
}

export default titleFormat;