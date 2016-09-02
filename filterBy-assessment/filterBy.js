console.log('debug in the console of your index.html file');

// define loop here:
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

// we've written filterBy for you here:
var filterBy = function(collection, predicate) {
	var result = [];
	loop(collection, function(elem) {
		if (predicate(elem)) {
			result.push(elem);
		}
	});
	return result;
};

// use filterBy on the `numbers collection` to return an array of odd numbers
var numbers = [22, 25, 78, 61, 36, 981, 313];
var oddNumbers = function(collection) {
	return filterBy(collection, function(number) {
		return number % 2 !== 0;
	});
}

console.log("odd numbers");
console.log(oddNumbers(numbers));		// logs [25, 61, 981, 313]

// use filterBy on the `numbers collection` to return an array of numbers that are smaller
// than the threshold.
var threshold = 75;
var smallerThan = function(collection, threshold) {
	return filterBy(collection, function(number) {
		return number < threshold;
	});
}

console.log("smaller than threshold");
console.log(smallerThan(numbers, threshold));	// logs [22, 25, 61, 36]

// use filterBy on the `people collection` to return an array of objects who's age is between 27 and 35.
var people = [{name: "Albrey", age: 25}, {name: "Dion", age: 26}, {name: "Kmack", age: 28}, {name: "Kanye", age: 32}, {name: "Beyonce", age: 39}, {name: "Jay-z", age: 42}];

var transform = function(collection, callback) {
	var results = [];
	loop(collection, function(element){
		results.push(callback(element));
	});
	return results;
}

var ageBetween = function(collection, startAge, endAge) {
	return transform(filterBy(collection, function(person, index) {
			return (person.age >= startAge && person.age <= endAge);
		}), function(element) {
			return element.name;
		});
}

console.log("age between 27 and 35");
console.log(ageBetween(people, 27, 35));	// logs ["Kmack", "Kanye"]
