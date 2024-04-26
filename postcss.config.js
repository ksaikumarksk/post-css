// postcss.config.js
// import prefixer from 'postcss-prefixer';
const prefixer = require("postcss-prefixer")

const config = {
    plugins: [
        prefixer({
            prefix: 'itd-'
        })
    ]
};

module.exports = config
