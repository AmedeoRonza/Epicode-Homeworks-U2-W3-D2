class User {
	constructor(firstName, lastName, age, location) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.location = location;
	}
	static ePiuGrandeDiStatic(UserX, UserY) {
		return UserY.age === UserX.age
			? "hanno la stessa età"
			: "L'età di " +
					UserY.firstName +
					" " +
					UserY.lastName +
					" è maggiore di quella di " +
					UserX.firstName +
					" " +
					UserX.lastName;
	}
}

const UserX = new User("Francesco", "Luppini", 32, "Italia");
console.log(UserX);
const UserY = new User("Giovanni", "Tomato", 44, "Italia");
console.log(UserY);

console.log(User.ePiuGrandeDiStatic(UserX, UserY));
