# About
the m4rch package is a small package, created by myself, for myself, to make my programming life a little bit easier.

# Installation

```
$ npm i m4rch
```

# Table of Contents
- [About](#about)
- [Installation](#installation)
- [Table of Contents](#table-of-contents)
- [Examples](#examples)
	- [main](#main)
	- [console](#console)
	- [fs](#fs)
	- [object](#object)

# Examples
## main
```javascript
const { print } = require("m4rch")

print("Hello World")
```

## console
```javascript
const { input } = require("m4rch")

async function ask() {
	let fav_food = await input("what is your favorite food? ")
}
```

## fs
```javascript
const { isDir } = require("m4rch")

isDir("./node_modules")
```

```js
const { recursive } = require("m4rch")

let files = recursive("./src/")
recursive("./src/", (files, folders) => {
	
})
```

```js
const { recursiveForEach } = require("m4rch")

recursiveForEach("./src/", (path, files, folders) => {
	
})
```

## object
```javascript
const { sortByValue } = require("m4rch")

let dict = {
	one: 4,
	two: 1,
	three: 2
}

let ascending = sortByValue(dict)
let descending = sortByValue(dict, true)
```

```javascript
const { countValues } = require("m4rch")

let dict = ["test", "test", "a", "test", "z"]

let counted = countValues(dict)
```
