function doMadLib(){

	 	/*

	 	Hello my name is (name).
	 	I am your (profession).
	 	How are you today ? 
	 	How can I (verb) you today? 
	 	Would you like a (noun)? 
	 	Did I introduce you to my (wild pet)? 
	 	Their name is (name). 
	 	Did they get your (noun) today? 
	 	Is everything to your satisfaction? 
	 	Can I offer you a (noun)? 
	 	Your (noun) is here.


	 	*/

	 		alert ("Here is your MadLib");

	 		var name1 = prompt ("tell me a name");

	 		var profession1 = prompt ("tell me a profession");

	 		var verb1 = prompt ("tell me a verb");

	 		var noun1 = prompt ("tell me a noun");

	 		var wildpet1 = prompt ("tell me a wild pet");

	 		var name2 = prompt ("tell me a name");

	 		var noun2 = prompt ("tell me a noun");

	 		var noun3 = prompt ("tell me a noun");

	 		var noun4 = prompt ("tell me a noun");

	 		

	 		alert ("Ok, here goes your MadLib! ");

	 		var story ="Hello my name is <span class='c'>" + name1 + 
	 		"</span> I am your <span class='c'>" + profession1 + "." + 
	 		"</span> How are you today ? " +
	 		"How can I <span class='c'>" + verb1 + "</span> you today?" +
	 		" Would you like a <span class='c'>" + noun1 +"</span>?" +
	 		" Did I introduce you to my <span class='c'>" + wildpet1 + "</span>?" +
	 		" Their name is <span class='c'>" + name2 + "</span>." +
	 		" Did they get your <span class='c'>" + noun2 + "</span> today?" +
	 		" Is everything to your satisfaction?" +
	 		" Can I offer you a <span class='c'>" + noun3 + "</span>?" +
	 		" Your <span class='c'>" + noun4 + "</span> is here." ;

	 		document.getElementById("finalMadLib").innerHTML = story;

	 };
	
