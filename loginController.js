function LoginController() {
	function isValidUserId(userList, user, callback) {
		setTimeout(function(){
			callback(userList.indexOf(user) >= 0);
		}, Math.random() * 1000);
	}

	return {
		isValidUserId
	};
}



module.exports = LoginController();