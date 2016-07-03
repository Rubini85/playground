var defeating = true;
// the hit is a random number that's either 0 (false) or 1 (true). If true, the hit has been succesful
var youHit = Math.floor(Math.random() * 2);
// the damage in each round is a random number from 0 to 5
var damageThisRound = Math.floor(Math.random() * 6);
var totalDamage = 0;

while(defeating) {
	if (youHit === 1) {
		totalDamage += damageThisRound;
		if (totalDamage === 1) {
			document.write("You hit the dragon " + totalDamage + " time!" + "<br>");
		} else {
			document.write("You hit the dragon " + totalDamage + " times!" + "<br>");
		}
			if (totalDamage >= 3) {
				document.write("<b>" + "You defeated the dragon!" + "</b>" + "<br>");
				defeating = false;
			} else {
				var youHit = Math.floor(Math.random() * 2);
			}
	} else {
		document.write("You failed to hit the dragon." + "<br>")
		document.write("<b>" + "The dragon defeated you." + "</b>")
		defeating = false;
	}
}
