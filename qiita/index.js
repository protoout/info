
const fs = require(`fs`);
const getOrg = require(`./getOrg`);

// const MAGAZINE_KEY_INTERVIEW = `m27cd63996372`; //プロトアウトインタビューマガジン
// const MAGAZINE_KEY_ZENTAI = `m03f109eaf0a8`; //プロトアウト学生全体マガジン

(async ()=>{
    const orgPosts = await getOrg();
    // return;

    const output = {
        zentai: orgPosts
    }

    fs.writeFileSync('./docs/qiita.json', JSON.stringify(output));
})();