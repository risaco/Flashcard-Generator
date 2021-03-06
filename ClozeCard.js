// *** Constructor for Cloze-deleted flashcard ***

function Cloze(text, cloze) {
	// Scope-safe constructor code
	if (!(this instanceof Cloze)) {
    	return new Cloze(text, cloze);
  	}

	// make sure all incoming text is lowercase for testing
	var textLower = text.toLowerCase();
	var clozeLower = cloze.toLowerCase();

	this.error = (!textLower.includes(clozeLower));

	// test to make sure "cloze" is actually in the "text" -- if not, throw an error
	if(this.error) {
		console.log("ERROR: cloze-deletion is not within the full text -- <" + cloze + ">");
		return;
	}

	this.fullText = text; // full text
	this.cloze = cloze; // cloze-deleted text only
	this.partial = text.replace(cloze, "...");
} // END of Cloze function

module.exports = Cloze;
