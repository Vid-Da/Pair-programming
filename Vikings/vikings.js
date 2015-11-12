
var Viking = function(name, health, strength) {
	this.name = name;
	this.health = health;
	this.strength = strength;
	this.life = true;
};

Viking.prototype.theLife = function(){
	return this.life;
}

Viking.prototype.attack = function(victim) {
	victim.health = victim.health - this.strength;
	if (victim.health < 1){
		victim.life = false;
	}
};

Viking.prototype.shout = function(){
	console.log("Se van a peleeeeeeaaaaaaaaaaaaar!!!");
};

var Saxon = function(health, strength){
	this.health = health; 
	this.strength = strength;
	this.life = true;

};

Saxon.prototype.attack = Viking.prototype.attack;
Saxon.prototype.theLife = Viking.prototype.theLife;

function createRandomsSaxons (numberOfSaxons){
	var saxons = [];
	for (var i = 0; i < numberOfSaxons; i++) {
		var saxon = new Saxon(getRandomArbitrary(10,20),	getRandomArbitrary(5,10));
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

function assault(vikingsAlive, saxonsAlive){
	vikings.forEach(function (viking){
		viking.shout();
	});
	var counter = 0;
	var rounds = getRandomArbitrary(5,8);
  var saxonsInit = saxonsAlive.length;
  var vikingsInit = vikingsAlive.length;

	while(counter < rounds){	
		counter++;

		for(var i = 0; i < vikingsAlive.length; i++){
			var saxonsRandom = getRandomArbitrary(0, saxonsAlive.length-1);
			vikingsAlive[i].attack( saxonsAlive[saxonsRandom]);
			saxonsAlive[ saxonsRandom].attack( vikingsAlive[i]);


			if(saxonsAlive[saxonsRandom].health < 1 ){
				saxonsAlive.splice(saxonsRandom, 1);
			}
			if(vikingsAlive[i].health < 1){
				vikingsAlive.splice(i, 1);

			}

		};

		if(saxonsAlive.length === 0 || vikingsAlive.length === 0){
			counter = rounds;
		}

	};
  var vikingsCasualties = checkDeathPercentage(vikingsAlive, vikingsInit);
  var saxonsCasualties = checkDeathPercentage(saxonsAlive, saxonsInit);

	if ( vikingsCasualties > saxonsCasualties ) {
		console.log("Game over");
	}
	else {
		console.log("The vikings win!");
	}
};



function checkDeathPercentage(groupAlive, groupInit){
	var casualties = groupInit - groupAlive.length;
	if (casualties === 0){
		var percentage = 0;
	} else{
		var percentage = casualties/groupInit;
	}
	return percentage;
}



function getRandomArbitrary(min,max) {
	return Math.round(Math.random() * (max - min) +min);
};

var Roslauf = new Viking("Roslauf", 50, 10);
var Arduin = new Viking("Arduin", 50, 10);


var vikings = [Roslauf, Arduin];
var saxons = createRandomsSaxons(getRandomArbitrary(5,30));
assault(vikings, saxons);
