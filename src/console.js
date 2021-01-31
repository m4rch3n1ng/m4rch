const readline = require("readline")

module.exports = {
	input: async function (text) {
		return new Promise((resolve, reject) => {
			const rl = readline.createInterface({
				input: process.stdin,
				output: process.stdout
			})
			
			rl.question(text, (answer) => {		
				rl.close()
				resolve(answer)
			})
		})
	}
}
