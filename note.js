const axios = require(`axios`);
const fs = require(`fs`);

const MAGAZINE_KEY = `m27cd63996372`; //プロトアウトインタビューマガジン
const NOTEAPI = `https://note.com/api/v1/layout/magazine/${MAGAZINE_KEY}`;

(async ()=>{

    const res = await axios.get(NOTEAPI);
    const pages = res.data.data.magazine_layout.page_layout.section.contents;

    let output = [];

    for (let i = 0,len = pages.length; i < len; i++) {
        const url = `https://note.com/${pages[i].user.urlname}/n/${pages[i].key}?magazine_key=${MAGAZINE_KEY}`
        output[i] = {
            id: pages[i].id,
            url: url,
            publish_at: pages[i].publish_at,
            title: pages[i].name,
            eyecatch: pages[i].eyecatch
        }
    }
    
    console.log(output);

    fs.writeFileSync('./public/note.json', JSON.stringify(output));
})();