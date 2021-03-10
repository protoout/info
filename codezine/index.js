
const fs = require(`fs`);
const getMagazine = require(`./getMagazine`);

const MIJIKA_RENSAI = `https://codezine.jp/article/corner/842`; //「自分自身で課題を解決するDX事例紹介」連載一覧

(async ()=>{
    const mijika = await getMagazine(MIJIKA_RENSAI);

    const output = {
        mijika: mijika,
        updated: require(`./../common/date`)()
    }

    fs.writeFileSync('./docs/codezine.json', JSON.stringify(output));
})();