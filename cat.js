var loadPage = function() {

/** Model */	
	var myCats = [
		{name: "BJ", pic: "pix/bj.jpg", counter: 0},
		{name: "Kiri", pic: "pix/kiri.jpg", counter: 0},
		{name: "Smudge", pic: "pix/smudge.jpg", counter: 0},
		{name: "Thor", pic: "pix/thor.jpg", counter: 0},
		{name: "Unknown", pic: "pix/unknown.jpg", counter: 0}
	];
	

/** Octopus */
	/** 
	 *  Makes the menu of cats
	 *  @function makeMenu
	 */
	var makeMenu = function() {
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
					displayCounter(catCopy);
				};
			})(catNum));
		};
	};
	
	/** 
	 *  Displays a random cat on page load and a selected cat when
	 *  called by the event listener.
	 *  @function displayCat
	 */
	var displayCat = function(n) {
		document.getElementById("cat_name").innerHTML = n.name;
		document.getElementById("cat_pic").innerHTML = '<img id =' + n.name + ' src="' + n.pic + '">';
		/** Sets n as a global variable currentCat to be used to track clicks 
		 *  on the cat currently being displayed.
		*/
		currentCat = n;
	};

	/** 
	 *  Displays the counter of the above on page load and a selected one when
	 *  called by the event listener.
	 *  @function displayCounter
	 */	
	var displayCounter = function(n) {
		document.getElementById("counter").innerHTML = "Counter: " + n.counter;
	};
	
	/** 
	 * A helper function to calculate random numbers between 0
	 * (inclusive) and n (exclusive).
	 * @function randNum 
	 */
	var randNum = function(n) {
		return Math.floor(Math.random() * n);
	};
	
	/** Picks a random cat to display on page load. */
	var displayThisCat = myCats[randNum(5)];

	var elem = document.getElementById("cat_pic");
	elem.addEventListener('click', (function(picCopy) {
		return function() {
			/* Increments count of currently displayed cat, updates it 
			 * in the myCats list, updates the counter display;
			 */
			currentCat.counter++;
			displayCounter(currentCat);
		};
	})(elem));	
	
	var displayAdminArea = function() {
		document.getElementById('admin-area').innerHTML = 
			'<form>Name:<input type="text" name="name" value=' + currentCat.name + '><br>' +
            'Image url:<input type="text" name="pic" value=' + currentCat.pic + '><br>' +
			'Counter:<input type="text" name="counter" value=' + currentCat.counter + '><br><br>' +
			'<button id="cancel">Cancel</button>' +
			'<input type="submit" value="Submit"></form>';
	};
	
	var adminButton = document.getElementById('admin');
	adminButton.addEventListener('click', function() {
		displayAdminArea();
	});
	
	hideAdmin = function() {
		//document.getElementById('admin-area').style.display = "none";
		console.log("Hello");
	};
	
	updateCats = function() {
		console.log("Hello");
	};

/** Display */
	/** calls makeMenu on page load */
	makeMenu();
	
	/** calls displayCat and displayCounter on page load. */
	displayCat(displayThisCat);
	displayCounter(displayThisCat);
}; 

/** Calls loadPage on page load. */
loadPage();	
