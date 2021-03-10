require('date-utils');

module.exports = () => {
    const dt = new Date();
    dt.setHours(dt.getHours() + 9).toLocaleString().slice(0,-3); //JST変換 
    return dt.toFormat("YYYY-MM-DD HH24:MI:SS");
}