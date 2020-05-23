function wlCommonInit(){
	require([ "layers/core-web-layer", "layers/mobile-ui-layer" ], dojoInit);
	
	
	// Common initialization code goes here
	
}


function dojoInit() {
	require([ "dojo/ready", "dojo/parser", "dojox/mobile", "dojo/dom", "dijit/registry", "dojox/mobile/ScrollableView" ], function(ready) {
		ready(function() {
		});
	});
}

var uid;
function login()
{
var vUser=$('#<uname>').val();
uid = vUser;
var vPwd=$('#<pword>').val(); 
invocationData = {
adapter : 'login_registerAdapter', procedure : 'login', parameters : [vPwd]
};
options = {
onSuccess : alertSuccess, onFailure : alertFailureoflogin
};
WL.Client.invokeProcedure(invocationData, options);
}


	

function register()
{
var fname=$('#fullname').val();
var user=$('#username').val();
var email=$('#email').val();
var phnumberser=$('#phonenumber').val();
var Password=$('#password').val();

invocationData = {
adapter : 'login_registerAdapter', procedure : 'register', parameters : [fullname,username,email,phnumber,password]
};
options = {
onSuccess : alertSuccess, onFailure : alertFailure
};
WL.Client.invokeProcedure(invocationData, options);
}



function book()
{
var checkin=$('#checkin').val();
var roomtype=$('#roomtype').val();
var totaguests=$('#totaguests').val();


invocationData = {
adapter : 'login_registerAdapter', procedure : 'bookingS', parameters : [checkin,roomtype,totaguests,uid]
};
options = {
onSuccess : alertSuccessforbook, onFailure : alertFailureforbook
};
WL.Client.invokeProcedure(invocationData, options);
}



function alertSuccess (result)
{

alert("Success");
window.location.replace("login.html");

}

function alertFailure ()
{
alert("Try again");
}

function alertSuccessforbook (result)
{

window.location.replace("thankyouscreen.html");

}

function alertFailureforbook ()
{
alert("Try again");
}


function alertSuccessoflogin (result)
{

window.location.replace("bookingpage.html");

}
function alertFailureoflogin ()
{
alert("Invalid Username or Password!");
}

