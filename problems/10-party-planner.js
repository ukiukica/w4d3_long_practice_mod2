class PartyPlanner {
	constructor(guestList = []) {
		this.guestList = guestList;
	}
	addToGuestList(name) {
		this.guestList.push(name);
		return this.guestList;
	}
	throwParty() {
		if (!this.guestList.length) return "Gotta add people to the guest list";
		else return `Welcome to the party ${this.guestList.join(" and ")} `;
	}
}


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = PartyPlanner;
} catch {
	module.exports = null;
}
