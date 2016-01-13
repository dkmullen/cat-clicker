var loadPage = function() {
	
	var myCats = [
		{name: "BJ", pic: "pix/bj.jpg", counter: 0},
		{name: "Kiri", pic: "pix/kiri.jpg", counter: 0},
		{name: "Smudge", pic: "pix/smudge.jpg", counter: 0},
		{name: "Thor", pic: "pix/thor.jpg", counter: 0},
		{name: "Unknown", pic: "pix/unknown.jpg", counter: 0}
	];

	/** 
	 * A helper function to calculate random numbers between 0
	 * (inclusive) and n (exclusive).
	 * @function randNum 
	 */
	var randNum = function(n) {
		return Math.floor(Math.random() * n);
	};

	function Cat(name, pic, counter) {
		this.name = name;
		this.pic = pic;
		this.counter = counter;
	}
	
	Cat.prototype.update = function() {
		counter += 1;
		document.getElementById("counter").innerHTML = "Counter: " + counter;
	};
	
	var newCat = function() {
		
	};
	
	/** Picks a random cat to display on page load. */
	var displayThisCat = myCats[randNum(5)];

	/** Pulls myCats.length out of the loop for better performance. */
	var myCatsLen = myCats.length;
	
	/** Loops thru myCats creating a DOM element (a menu) including each cat.
	 *  Adds an event listener w/c stores the clicked item in a closure,
	 *  and calls displayCat to display the selected item on the page.
	*/
	for (var i = 0; i < myCatsLen; i++) {
		var catNum = myCats[i];
		
		var node = document.createElement("BUTTON");
		node.id = i;
		var textnode = document.createTextNode(myCats[i].name);
		node.appendChild(textnode);
		document.getElementById("menu").appendChild(node);
		
		node.addEventListener('click', (function(catCopy) {
			return function() {
				displayCat(catCopy);
			};
		})(catNum));
	};	
	
	/** 
	 *  Displays a random cat on page load and a selected cat when
	 *  called by the event listener.
	 *  @function displayCat
	*/
	var displayCat = function(n) {
		document.getElementById("cat_name").innerHTML = n.name;
		document.getElementById("cat_pic").innerHTML = '<img id =' + n.name + ' src="' + n.pic + '">';
		document.getElementById("counter").innerHTML = "Counter: " + n.counter;
	};

	/** calls displayCat on page load. */
	displayCat(displayThisCat);
	
	var elem = document.getElementById("cat_pic");
	elem.addEventListener('click', (function(picCopy) {
		return function() {
			console.log(picCopy);
			//document.getElementById("counter").innerHTML = "Counter: " + int(counter); 
		};
	})(elem));
}; 

/** Calls loadPage on page load. */
loadPage();	


/*
Removed an unnecessary variable in the for loop.
Added an img ID to the displayCat function.
Added an event listener to the current cat pic.
	
*/