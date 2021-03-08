
const fs = require(`fs`);
const getInterview = require(`./interview`);

let output = {};
const MAGAZINE_KEY_INTERVIEW = `m27cd63996372`; //プロトアウトインタビューマガジン
const MAGAZINE_KEY_ZENTAI = `m03f109eaf0a8`; //プロトアウト学生全体マガジン

(async ()=>{
    const interview = await getInterview(MAGAZINE_KEY_INTERVIEW);
    const zentai = await getInterview(MAGAZINE_KEY_ZENTAI);
    output = {
        interview: interview,
        zentai: zentai
    }

    fs.writeFileSync('./docs/note.json', JSON.stringify(output));
})();