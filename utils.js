export const trimText = (text="",limit) => 
    text.length > limit ? `${text.slice(0,limit)}...`:text

export const formatDate = date => {
    const theDate = new Date(date);
    return `${theDate.getFullYear()}년 ${theDate.getMonth() + 1 < 10 ? `0${theDate.getMonth() + 1}` 
    : theDate.getMonth() + 1}월 ${theDate.getDay() < 10 ? `0${theDate.getDay()}` : theDate.getDay()}일`
};