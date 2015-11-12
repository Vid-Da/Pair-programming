
var Viking = function(name, health, strength) {
	this.name = name;
	this.health = health;
	this.strength = strength;
};

Viking.prototype.attack = function(victim) {
	victim.health = victim.health - this.strength;
};

function pit(fighter1, fighter2) {
	var fighters = [fighter1, fighter2];
	var counter = 0;
	while (fighter1.health > 20  && fighter2.health > 20 && counter < 10) {
		var random = Math.round(getRandomArbitrary(0,1));
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

function getRandomArbitrary(min,max) {
	return Math.random() * (max - min) +min;
};

var Roslauf = new Viking("Roslauf", 50, 10);
var Arduin = new Viking("Arduin", 50, 10);

pit(Roslauf, Arduin);