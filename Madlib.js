function madlib(){
	let playerStory = prompt("Would you like storyone or storytwo?");
	if (playerStory === "storyone"){
		storyOne();
	} else {
		storyTwo();
	}

	function storyOne() {
		let adj1 = prompt("type an adjective");
        let pL1 = prompt("type a general place");
        let vN1 = prompt("type a vehicle name (plural)");
        let game = prompt("type the name of a game");
        let noun = prompt("type a plural noun");
        let verb1 = prompt("type an 'ing' verb");
        let verb2 = prompt("type another 'ing' verb");
        let food = prompt("type a food name (plural)");
        let sport = prompt("type the name of a sport");
        let verb3 = prompt("type another 'ing' verb");
        let emotion = prompt("type an emotion");
        let number = prompt("type a number");
	    let storyline1 = alert(`A vacation is when you take a trip to some '${adj1}' place near an amazing '${pL1}'. A good vacation place is one where you can ride '${vN1}' or play '${game}' or go hunting for '${noun}'. I like to spend my time '${verb1}' or '${verb2}'. When parents go on a vacation, they spend their time eating three '${food}' a day. Usually, fathers play '${sport}', and mothers spend their time '${verb3}'. Adults need vacations more than kids because adults are always very '${emotion}' because they have to work '${number}' hours every day all year just to afford their vacations!`);
}

	function storyTwo() {
		let adjective21 = prompt("type an adjective");
		let place21 = prompt("type a famous place");
		let noun2 = prompt("type a plural noun");
		let adjective2 = prompt("type another adjective");
		let food2 = prompt("type a food (plural)");
		let emotion2 = prompt("type an emotion");
		let verb2 = prompt("type an 'ing' verb");
		let place2 = prompt("type a common place");
		let adjective3 = prompt("type another adjective");
		let noun3 = prompt("type a noun");
		let adjective4 = prompt("type another adjective");
		let noun4 = prompt("type another noun");
		let kin = prompt("type a family member");
        let adjective5 = prompt("type another adjective");
        let storyline2 = alert(`Today we took a '${adjective21} fieldtrip to '${place21}'. They're famous for making '${noun2}' cooking '${adjective2}' '${food2}. Eating all that food mad made me feel '${emotion2}'. Next we enjoyed the local tradition of '${verb2}' in the middle of the '${place2}'! Finally, we went shopping for souvenirs. I bought a '${adjective3}' '${noun3}' for myself, and a '${adjective4}' '${noun4}' for ny favorite '${kin}'. I'll definitely never forget this '${adjective5}' trip!`)
}
}
madlib();