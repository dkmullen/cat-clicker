var myCats = [
	{name: "BJ", nickname: "Boo Boo", pic: "pix/bj.jpg", counter: 0},
	{name: "Kiri", nickname: "Wee Wee", pic: "pix/kiri.jpg", counter: 0},
	{name: "Smudge", nickname: "Jayne", pic: "pix/smudge.jpg", counter: 0},
	{name: "Thor", nickname: "Thunder", pic: "pix/thor.jpg", counter: 0},
	{name: "Unknown", nickname: "Jerry", pic: "pix/unknown.jpg", counter: 0}
];

var Cat = function(data) {
	this.name = ko.observable(data.name);
	this.nickname = ko.observable(data.nickname);
	this.pic = ko.observable(data.pic);
	this.counter = ko.observable(data.counter);
	
	this.fullName = ko.computed(function() {
		return this.name() + " (" + this.nickname() + ")";
	}, this);
	
	this.title = ko.computed(function() {
		var title;
		var clicks = this.counter();
		if (clicks < 5) {
			title = 'Kitten';
		} else if (clicks < 10) {
			title = 'Teen';
		} else if (clicks < 15) {
			title = 'Adult';
		} else {
			title = 'Cat-aracts';
		}
		return title;
	}, this);	
}

var ViewModel = function() {
	var self = this;
	var randNum = Math.floor(Math.random() * myCats.length)
	this.catList = ko.observableArray([]);
	
	myCats.forEach(function(catItem){
		self.catList.push( new Cat(catItem) );
	});
	
	this.currentCat = ko.observable( this.catList()[randNum] );
	
	this.incrementCounter = function() {
		this.counter(this.counter() + 1);
	};
	
	this.setCat = function(clickedCat) {
		self.currentCat(clickedCat)
	};
}

ko.applyBindings(new ViewModel())