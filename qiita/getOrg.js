const axios = require(`axios`);
const convert = require('xml-js');

module.exports = async (MAGAZINE_KEY) => {    
    try {
        const QIITA_ORG = `https://qiita.com/organizations/protoout-studio/activities.atom`;

        const res = await axios.get(QIITA_ORG);
        // console.log(res.data);

        const options = { ignoreComment: true, alwaysChildren: true };
        const result = convert.xml2json([res.data], options);
        // console.log(result);
        let output = result;
        
        return output;
    } catch (error) {
        throw new Error(error);
    }
}