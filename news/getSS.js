const axios = require(`axios`);
const csv = require('csvtojson');

const SSURL = `https://docs.google.com/spreadsheets/d/e/2PACX-1vTsE-3Tvv49K3FDnVLsEtsBnDlmBEeKChyQTfexpVwz-gzzpX_UaiWpYzS7J4p6vtl5IFWgNxCd_NNa/pub?gid=0&single=true&output=csv`;

module.exports = async () => {    
    try {
        const res = await axios.get(SSURL);
        
        const json = await csv({
            noheader: false,
            output: 'json'
        }).fromString(res.data);

        const data = json.filter(item => item.date !== '');
        data.reverse();
        // console.log(data);
        return json;
    } catch (error) {
        throw new Error(error);
    }
}