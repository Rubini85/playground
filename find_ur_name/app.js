var text = "Lorem ipsum dolor sit amet Alessio, consectetur adipiscing elit. \
 Fusce eget finibus tortor. Etiam vehicula ipsum id felis pretium suscipit. \
 Etiam porta egestas arcu sit amet consequat.";
 var myName = "Alessio";
 var hits = [];

 for (var i = 0; i < text.length; i++) {
 	if (text[i] === "A") {
 		for (j = i; j < (i + myName.length); j++ ) {
 			hits.push(text[j]);
 		}
 	}
 }

 if (hits === 0) {
 	document.write("Your name wasn't found!");
 } else {
 	document.write(hits);
 }
 