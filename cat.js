/** Model - The data*/

var model = {
	currentCat: null,
	myCats: [
		{name: "BJ", pic: "pix/bj.jpg", counter: 0},
		{name: "Kiri", pic: "pix/kiri.jpg", counter: 0},
		{name: "Smudge", pic: "pix/smudge.jpg", counter: 0},
		{name: "Thor", pic: "pix/thor.jpg", counter: 0},
		{name: "Unknown", pic: "pix/unknown.jpg", counter: 0}
	]
};	

/** Octopus - to communicate between model and Display*/

var octopus = {
	
	/** Picks a random cat, calls the inits in Display */
	init: function() {
		model.currentCat = model.myCats[Math.floor(Math.random() * model.myCats.length)];
		catMenuView.init();
		catView.init();
		adminView.init();
	},
	
	/** A @function to be called when currentCat is needed */
	getCurrentCat: function() {
		return model.currentCat;
	},
	
	/** A @function to be called when the whole myCats object is needed */
	getAllCats: function() {
		return model.myCats;
	},
	
	/** A @function to be called to set the current currentCat */
	setCurrentCat: function(cat) {
		model.currentCat = cat;
	},
	
	/** A @function to be called when counter needed updated */
	incrementCounter: function() {
		model.currentCat.counter++;
		catView.render();
	}
};

/** Display - Contains only code to be put on the screen */

var catMenuView = {
	/** A @function which sets a variable for menu element, calls render */
	init: function() {
		this.catListElem = document.getElementById('menu');
		this.render();
	},
	
	/** A @function that sets variables, gets the list of cats, builds the menu */
	render: function() {
		var cat, node, i;
		var allCats = octopus.getAllCats();
		for (i = 0; i < allCats.length; i++) {
			cat = allCats[i];
			
			/** Creates buttons, adds text and an event listener */
			node = document.createElement("BUTTON");
			node.id = i;
			var textnode = document.createTextNode(allCats[i].name);
			node.appendChild(textnode);
			
			node.addEventListener('click', (function(catCopy) {
				/** Saves a temp copy of the clicked button, renders the right cat */
				return function() {
					octopus.setCurrentCat(catCopy);
					catView.render(catCopy);
				};
			})(cat));
			
			this.catListElem.appendChild(node);
		}
	}
};

var catView = {
	/** A @function to create the cat in the DOM */
	init: function() {
		this.catElem = document.getElementById("cat");
		this.catNameElem = document.getElementById("cat_name");
		this.catImageElem = document.getElementById("cat_pic");
		this.countElem = document.getElementById("counter");
		
		this.catImageElem.addEventListener('click', function() {
			octopus.incrementCounter();
		});
		
		this.render();
	},
	
	/** A @function to render the above cat */
	render: function() {
		var currentCat = octopus.getCurrentCat();
		this.catNameElem.textContent = currentCat.name;
		this.catImageElem.src = currentCat.pic;
		this.countElem.textContent = currentCat.counter;
		
	}
};

var adminView = {
	/** A @function to create the admin ares; NOT rendered on page load */
	init: function() {
		this.adminElem = document.getElementById('admin-area');
		this.adminButton = document.getElementById('admin-button');
		
		/** This is the only place where render is called */
		this.adminButton.addEventListener('click', function() {
			adminView.render();
		});
	},
	
	/** A @function to render the admin box on click of admin button */
	render: function() {
		var currentCat = octopus.getCurrentCat();
		this.adminElem.innerHTML = 
			'<div id="admin-box">' +
			'Name:<input type="text" name="name" value="' + currentCat.name + '"><br>' +
			'Img URL:<input type="text" name="pic" value="' + currentCat.pic + '"><br>' +
			'Counter:<input type="text" name="counter" value="' + currentCat.counter + '"><br><br>' +
			'<button id="cancel">Cancel</button>' +
			'<button id="save">Save</button>' +
			'</div>';
	}
};

/** Loads the page. Octopus calls the inits which call the renders */
octopus.init();
