module.exports = {
	sortByValue: function (input, descending) {
		if (typeof input != "object" || !Array.isArray(input) || !input) throw new Error("input must be of type object.")

		let items = !Array.isArray(input) ?  Object.entries(input) : input

		items.sort(function(el1, el2) {
			return (descending) ? el2[1] - el1[1] : el1[1] - el2[1]
		})
	
		return items
	},
	countValues: function (arr) {
		let narr = []

		arr.filter((el, i) => arr.indexOf(el) == i).forEach(el => narr.push([el, arr.filter(e => e == el).length]))

		return narr
	}
}
