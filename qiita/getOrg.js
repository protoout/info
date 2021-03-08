const axios = require(`axios`);
const convert = require('xml-js');

module.exports = async (MAGAZINE_KEY) => {    
    try {
        const QIITA_ORG = `https://qiita.com/organizations/protoout-studio/activities.atom`;

        const res = await axios.get(QIITA_ORG);

        const options = { ignoreComment: true, alwaysChildren: true };
        const result = convert.xml2json([res.data], options);
        const json = JSON.parse(result).elements[0].elements;

        let output = [];

        json.map(elem => elem.elements)
            .map(elem => {
                const obj = {};
                for (let i = 0, len = elem.length; i < len; i++) {
                    const item = elem[i];
                    if(item.name === 'id')obj.id = item.elements[0].text;
                    if(item.name === 'updated')obj.updated = item.elements[0].text;
                    if(item.name === 'url')obj.url = item.elements[0].text;
                    if(item.name === 'title')obj.title = item.elements[0].text;
                    if(item.name === 'published')obj.published = item.elements[0].text;
                    if(item.name === 'author')obj.author = item.elements[0].elements[0].text;
                    if(item.name === 'link')obj.link = item.attributes.href;
                    //if(item.name === 'content')obj.content = item.elements[0].text;
                }
                if(Object.keys(obj).length) output.push(obj);
            })
            
        return output;
    } catch (error) {
        throw new Error(error);
    }
}