const http = require("http")
const https = require("https")

module.exports = {
	download: async function (link) {
		if (!/^https?:\/\/.+/.test(link)) throw new Error("not a valid link.")

		return new Promise((resolve, reject) => {
			let loader = link.startsWith("https") ? https : http

			loader.get(link, (res) => {

				let arr = []

				res.on("data", (d) => {
					arr.push(d)
				})

				res.on("end", function() {
					resolve(Buffer.concat(arr))
				})

			}).on("error", reject)
		})
	}
}