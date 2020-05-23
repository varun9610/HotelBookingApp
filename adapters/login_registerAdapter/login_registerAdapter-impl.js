 var registerStatement = WL.Server.createSQLStatement("INSERT INTO user_detail(fullname,username,email,phnumber,password) VALUES(?,?,?,?,?)");
function register(fName,User,Email,phnumber,password) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : registerStatement,
		parameters : [fName,User,Email,phnumber,password]
	});
}


var loginStatement = WL.Server.createSQLStatement("SELECT uname from user_detail(username) WHERE password = ? ");
function login(password) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : loginStatement,
		parameters : [password]
	});
}


var bookingS = WL.Server.createSQLStatement("UPDATE staydetails(checindate,roomtype,totalguest) VALUES(?,?,?) WHERE username = ? ");
function bookingS(checindate,roomtype,totalguest,username) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : bookingS,
		parameters : [checindate,roomtype,totalguest,username]
	});
}