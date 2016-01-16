/** Model */

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

/** Octopus */

var octopus = {
	
	init: function() {
		model.currentCat = model.myCats[Math.floor(Math.random() * model.myCats.length)];
		catMenuView.init();
		catView.init();
	},
	
	getCurrentCat: function() {
		return model.currentCat;
	},
	
	getAllCats: function() {
		return model.myCats;
	},
	
	setCurrentCat: function(cat) {
		model.currentCat = cat;
	},
	
	incrementCounter: function() {
		model.currentCat.counter++;
		catView.render();
	}
};

/** Display */

var catMenuView = {
	init: function() {
		this.catListElem = document.getElementById('menu');
		this.render();
	},
	
	render: function() {
		var cat, node, i;
		var allCats = octopus.getAllCats();
		this.catListElem.innerHTML = '';
		for (i = 0; i < allCats.length; i++) {
			cat = allCats[i];
			
			node = document.createElement("BUTTON");
			node.id = i;
			var textnode = document.createTextNode(allCats[i].name);
			node.appendChild(textnode);
			
			node.addEventListener('click', (function(catCopy) {
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
	
	render: function() {
		var currentCat = octopus.getCurrentCat();
		this.catNameElem.textContent = currentCat.name;
		this.catImageElem.src = currentCat.pic;
		this.countElem.textContent = currentCat.counter;
		
	}
};
octopus.init();
