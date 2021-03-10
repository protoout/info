
const fs = require(`fs`);
const getSS = require(`./getSS`);

(async ()=>{
    const news = await getSS();
    const output = {
        zentai: news,
        updated: require(`./../common/date`)()
    }

    fs.writeFileSync('./docs/news.json', JSON.stringify(output));
})();