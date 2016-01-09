var loadPage = function() {
	
	var myCats = [
		{name: "BJ", pic: "pix/bj.jpg", counter: 0},
		{name: "Kiri", pic: "pix/kiri.jpg", counter: 0},
		{name: "Smudge", pic: "pix/smudge.jpg", counter: 0},
		{name: "Thor", pic: "pix/thor.jpg", counter: 0},
		{name: "Unkown", pic: "pix/unknown.jpg", counter: 0}
	];

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

	/** Pulls myCats.length out of the loop for better performance. */
	var myCatsLen = myCats.length;
	
	/** Loops thru myCats creating a DOM element (a menu) including each cat.
	 *  Adds an event listener w/c stores the clicked item in a closure,
	 *  changes displayThisCat to the clicked value and calls displayCat
	 *  to display the selected item on the page.
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
				displayThisCat = catCopy;
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
		document.getElementById("cat_pic").innerHTML = '<img src="' + n.pic + '">';
		document.getElementById("counter").innerHTML = "Counter: " + n.counter;
	};

	/** calls displayCat on page load. */
	displayCat(displayThisCat);
}; 

/** Calls loadPage on page load. */
loadPage();	


/*	
	var elem = document.getElementById('0');
	elem.addEventListener('click', function(){
		displayCat(0);
	}, false);

	var elem = document.getElementById('1');
	elem.addEventListener('click', function(){
		displayCat(1);
	}, false);
	
	var elem = document.getElementById('2');
	elem.addEventListener('click', function(){
		displayCat(2);
	}, false);
	
	var elem = document.getElementById('3');
	elem.addEventListener('click', function(){
		displayCat(3);
	}, false);
	
	var elem = document.getElementById('4');
	elem.addEventListener('click', function(){
		displayCat(4);
	}, false); 
*/


/*
var clickCounter = function() {
	document.getElementById("name1").innerHTML =
		name1;
	document.getElementById("counter1").innerHTML =
		"Clicks: <strong>" + count1 + "</strong>";
};
var clickCounter2 = function() {
	document.getElementById("name2").innerHTML =
		name2;
	document.getElementById("counter2").innerHTML =
		"Clicks: <strong>" + count2 + "</strong>";
};
//runs clickCounter on page load
clickCounter1();
clickCounter2();


	

	
*/