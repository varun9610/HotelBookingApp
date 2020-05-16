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
var vPwd=$('#<pword>').val(); 
invocationData = {
adapter : 'MySQLAdapter', procedure : 'login', parameters : [vPwd]
};
options = {
onSuccess : alertSuccess, onFailure : alertFailure
};
WL.Client.invokeProcedure(invocationData, options);
}


	

function register()
{
var fname=$('#fullname').val();
var user=$('#username').val();
var email=$('email').val();
var phnumberser=$('phonenumber').val();
var Password=$('#pword').val(); 
invocationData = {
adapter : 'login_registerAdapter', procedure : 'register', parameters : [fullname,username,email,phnumber,password]
};
options = {
onSuccess : alertSuccess, onFailure : alertFailure
};
WL.Client.invokeProcedure(invocationData, options);
}


function alertSuccess (result)
{

alert("Success");
}

function alertFailure ()
{
alert("Try again");
}

