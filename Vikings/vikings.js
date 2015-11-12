
var Viking = function(name, health, strength) {
	this.name = name;
	this.health = health;
	this.strength = strength;
};

Viking.prototype.attack = function(victim) {
	victim.health = victim.health - this.strength;
};

Viking.prototype.shout = function(){
	console.log("Aaaarrrrgggg!!!!");
};

var Saxon = function(){
	this.health = getRandomArbitrary(5,20);
	this.strength = getRandomArbitrary(1,5);

};

function createRandomsSaxons (numberOfSaxons){
	var saxons = [];
	for (var i = 0; i < numberOfSaxons; i++) {
		var saxon = new Saxon();
		saxons[i] = saxon;
	};
	console.log("There are " + saxons.length + " saxons in the village.");
	return saxons;
}


function pit(fighter1, fighter2) {
	var fighters = [fighter1, fighter2];
	var counter = 0;
	while (fighter1.health > 20  && fighter2.health > 20 && counter < 10) {
		var random = getRandomArbitrary(0,1);
		++counter;
		if (random === 0) {
			fighters[0].attack(fighters[1]);
			console.log(fighters[0].name + " attacked " + fighters[1].name + " which has only " + fighters[1].health + " health points remaining");
		} else {
			fighters[1].attack(fighters[0]);
			console.log(fighters[1].name + " attacked " + fighters[0].name + " which has only " + fighters[0].health + " health points remaining");	 
		}
	}
	if (fighters[0].health > fighters[1].health) {
		console.log("The winner is: " + fighters[0].name + " and the remaining health of " + fighters[1].name + " is " + fighters[1].health);
	} else {
		console.log("The winner is: " + fighters[1].name + " and the remaining health of " + fighters[0].name + " is " + fighters[0].health);
	}
};

function assault(vikings, saxons){
	vikings.forEach(function (viking){
		viking.shout();
	});
	while(checkDeath(viking) === false && checkDeath(saxons) === false){
		
	}

}

function checkDeath(group){
	var booleanDeath = false;
	group.forEach(function (person){
		if (person.health < 1){
			booleanDeath = true;
		}
	});
	return booleanDeath;
}



function getRandomArbitrary(min,max) {
	return Math.round(Math.random() * (max - min) +min);
};

var Roslauf = new Viking("Roslauf", 50, 10);
var Arduin = new Viking("Arduin", 50, 10);


var vikings = [Roslauf, Arduin];
var saxons = createRandomsSaxons(getRandomArbitrary(5,20));
assault(vikings, saxons);
