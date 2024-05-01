export const fixDate = (date) => {
    if (new Date(date).getDate() < 10 && (new Date(date).getMonth() + 1) < 10) {
        return `0${new Date(date).getDate()}.0${new Date(date).getMonth() + 1}.${new Date(date).getFullYear()}`
    } else if(new Date(date).getDate() < 10 ) {
        return `0${new Date(date).getDate()}.${new Date(date).getMonth() + 1}.${new Date(date).getFullYear()}`
    } else if ((new Date(date).getMonth() + 1) < 10) {
        return `${new Date(date).getDate()}.0${new Date(date).getMonth() + 1}.${new Date(date).getFullYear()}`
    }
    return `${new Date(date).getDate()}.${new Date(date).getMonth() + 1}.${new Date(date).getFullYear()}`
}