const axios = require(`axios`);

module.exports = async (URL) => {    
    try {
        const res = await axios.get(URL);
        const html = res.data;
        const items = html.replace(/\r?\n/g,"").match(/<li id="(.*?)class="tag"/g);

        const output = items.map(elem => {
            let result = {};
            result.id = Number(elem.match(/<li id="(.*?)">/)[1]);
            result.date = elem.match(/class="day">(.*?)<\/div>/)[1];
            const regexp = new RegExp(`<h2><a href="\/article\/detail\/${result.id}">(.*?)<\/a><\/h2>`);
            result.title = elem.match(regexp)[1];

            result.image = `https:`+elem.match(/src="(.*?)"/)[1];
            result.content = elem.match(/<p>(.*?)<\/p>/)[1];
            return result;
        })
        return output;
    } catch (error) {
        throw new Error(error);
    }
}