export default (string) => {
    const date = new Date(string),
        month = date.getMonth() + 1, 
        day = date.getDate(), 
        year = date.getFullYear();
    return `${month}/${day}/${year}`;
}