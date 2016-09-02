// define loop here
var loop = function(collection, callback) {
	if (Array.isArray(collection)) {
		for (var i = 0; i < collection.length; i++) {
			callback(collection[i], i);
		}
	} else if (typeof collection === "object") {
		for (var key in collection) {
			callback(collection[key], key);
		}
	}
}

// define extendObj here
var extendObj = function(targetObj, extensionObj) {
	loop(extensionObj, function(value, key) {
		if (!targetObj.hasOwnProperty(key)) {
			targetObj[key] = value;
		} else {
			console.log("this property already exists in the target object");
		}
	});
}


// test data we're giving you:
var Jon = {name: "Jon", fear: "koala bears"};
var moreCharacteristics = {favoriteFruit: "avocados", funFact: "I once played basketball with Prince in the summer of 1984."};

// test extendObj here using the two sample data objects given above
extendObj(Jon, moreCharacteristics);
console.log("extendObj");
console.log(Jon);

var evenMoreCharacteristics = {sportGrowingUp: "extreme table tennis", creditCardNumber: 93481847};

// extend function to take in an array of extension objects
var extendObj = function(targetObj, extensionObjCollection) {
	loop(extensionObjCollection, function(extensionObj) {
		loop(extensionObj, function(value, key) {
			if (!targetObj.hasOwnProperty(key)) {
				targetObj[key] = value;
			} else {
				console.log("this property already exists in the target object");
			}
		});
	});
}

extendObj(Jon, [moreCharacteristics, evenMoreCharacteristics]);
console.log(Jon);
