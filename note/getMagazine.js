const axios = require(`axios`);

module.exports = async (MAGAZINE_KEY) => {    
    try {
        const NOTEAPI = `https://note.com/api/v1/layout/magazine/${MAGAZINE_KEY}`;

        const res = await axios.get(NOTEAPI);
        const pages = res.data.data.magazine_layout.page_layout.section.contents;
        let output = {};
    
        //インタビュー
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
        return output;
    } catch (error) {
        throw new Error(error);
    }
}