const fs = require("fs")

fs.readdirSync(`${__dirname}/src/`).forEach(file => {
	module.exports = {...module.exports, ...require(`./src/${file}`)}
})
