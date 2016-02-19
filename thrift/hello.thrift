struct Profile {
	1: i32 card,
	2: i32 partner,
}

struct User {
	1: string name,
	2: i32 gender,
	3: i32 uid,
	4: string extra,
	5: Profile profile,
}

service helloService {
	string echo(1: string msg),
	string foo(),
	bool saveUser(1: User user),
	User loadUser(1: i32 uid),
	list<User> loadUsers(),
	map<string, i32> testSet(),
}

service PeopleService {
	bool ping(),
}