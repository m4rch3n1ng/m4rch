const { rejects } = require("assert");
const fs = require("fs");

module.exports = {
	isDir: function (path) {
		path = path.startsWith("/") ? path.slice(1) : path

		try {
			var stat = fs.lstatSync(path);
			return stat.isDirectory();
		} catch (e) {
			return false;
		}
	},
	recursive: function (path, callback) {
		let files = []
		let folders = []

		r(path)

		if (typeof callback == "function") callback(files, folders)
		return files
		
		function r (path) {
			let all = fs.readdirSync(path)
			let current = all.filter(item => fs.statSync(`${path}/${item}`).isDirectory())
	
			files = files.concat(all.filter(file => !fs.statSync(`${path}/${file}`).isDirectory()).map(file => `${path}/${file}`))
			folders = folders.concat(current.map(file => `${path}/${file}`))
	
			for (folder of current) {
				r(`${path}/${folder}`)
			}
		}
	},
	recursiveForEach: function (path, callback) {
		if (typeof callback != "function") throw new Error(`${typeof callback} is not a function`)

		rfe(path)
		
		function rfe (path) {
			let all = fs.readdirSync(path)

			let folders = all.filter(item => fs.statSync(`${path}/${item}`).isDirectory())
			let nfolders = folders.map(folder => `${path}/${folder}`)
			let nfiles = all.filter(file => !fs.statSync(`${path}/${file}`).isDirectory()).map(file => `${path}/${file}`)

			if (typeof callback == "function") callback(path, nfiles, nfolders)

			for (folder of folders) {
				rfe(`${path.endsWith("/") ? path : path + "/"}${folder}`)
			}
		}
	}
}
