// main application functionality.
let userAccount = _.Select('.userAccount');
let signInHome = _.Select('.SignInHome ');
let signUpHome = _.Select('.SignUpHome');
let shadow = _.Select('.cover');
let popup = _.Select('.PortalCover');
let submitButtonSignIn  = _.Select('.submit-1');
let submitButtonSignUp  = _.Select('.submit-2');

// sign up portal(pop up elements)
let formData = _.Select('.AccountPortal .center .Sign-In');
let signUpButtons = _.Select('.AccountPortal .top div', true);
let signIn = signUpButtons[0], signUp = signUpButtons[1];
const NewUser = {Name: '',Number:'' ,Password: '',data: {tickets: [],}}
const db = firebase.firestore();
let counter = 0;

// chek user inputs: sign up section.
let SignInInputs  = _.Select('.Sign-In div input', true);
let SignUpInputs  = _.Select('.Sign-Up div input', true);

let App = {
	dataBase: { // fire base.
		write: function (tellnumber, namedata, passworddata) {
			// configering firestore database.
			// Add a new document in collection "cities"
			db.collection("users").doc(`${tellnumber}`).set({
				name: `${namedata}`,
				tellphone: `${tellnumber}`,
				password: `${passworddata}`,
				limitreached: false,
				varified: false,
			})
			.then(() => {
				console.log("Document successfully written!");
			})
			.catch((error) => {
				console.error("Error writing document: ", error);
			});
		}	
	},
	buttonRresponse: function (){
		

		_.Event(userAccount, 'click', function (){
			_.Select('.userAccount ol').classList.add('appendMenu');
			shadow.classList.add('extend');
		}, true);

		_.Event(signInHome, 'click', function (){
			shadow.classList.add('extend');
			popup.classList.remove('hidePortal');
			popup.classList.add('showPortal');
			_.Select('.AccountPortal .Title2 h2').classList.add('Active');
			_.Select('.AccountPortal .Title h2').classList.remove('Active');
			formData.classList.add('displaySignIn');
			submitButtonSignIn.classList.add('displaySubmitSignIn');
			submitButtonSignUp.classList.add('removeSubmitSignUp');
		}, true);
		
		_.Event(signUpHome, 'click', function (){
			shadow.classList.add('extend');
			popup.classList.remove('hidePortal');
			popup.classList.add('showPortal');
			_.Select('.AccountPortal .Title h2').classList.add('Active');
			_.Select('.AccountPortal .Title2 h2').classList.remove('Active');
			formData.classList.remove('displaySignIn');
			submitButtonSignIn.classList.remove('displaySubmitSignIn');
			submitButtonSignUp.classList.remove('removeSubmitSignUp');
		}, true);

		_.Event(shadow, 'click', function(){
			_.Select('.sucessMassage').classList.remove('showsucesspopup');
			popup.classList.remove('showPortal');
			popup.classList.add('hidePortal');
			shadow.classList.remove('extend');

			_.Select('.userAccount ol').classList.remove('appendMenu');
		}, true)

		// sign in and sign up pop up functionality
		_.Event(signIn, 'click', function(){
			formData.classList.add('displaySignIn');
			submitButtonSignIn.classList.add('displaySubmitSignIn');
			submitButtonSignUp.classList.add('removeSubmitSignUp');
			_.Select('.AccountPortal .Title2 h2').classList.add('Active');
			_.Select('.AccountPortal .Title h2').classList.remove('Active');
		}, true);
		
		_.Event(signUp, 'click', function(){
			formData.classList.remove('displaySignIn');
			submitButtonSignIn.classList.remove('displaySubmitSignIn');
			submitButtonSignUp.classList.remove('removeSubmitSignUp');
			_.Select('.AccountPortal .Title2 h2').classList.remove('Active');
			_.Select('.AccountPortal .Title h2').classList.add('Active');
		}, true);
	},

	// user acount and database configuron for user login
	SignIn_SignUp_Error_Checking: function () {
		// sign up button.
		_.Event(submitButtonSignUp, 'click', function(){
			// check inputs: Sign Up name: number: password
			for(var i = 0; i < SignUpInputs.length; i++){
				if(SignUpInputs[i].value.split() == '' || SignUpInputs[i].value.split() == 'IBRAHIM TUMWESIGYE' || SignUpInputs[i].value.split() == '0704803772'){
					SignUpInputs[i].classList.add('error');
					SignUpInputs[i].value = '';
				}else{
					SignUpInputs[i].classList.remove('error');
				}
			} 
			// store user data. for future data base storage.

			// store name.
			if (SignUpInputs[0].value.split() !== '' | SignUpInputs[0].value.split() !== 'IBRAHIM TUMWESIGYE'){
				NewUser.Name = SignUpInputs[0].value;
			}
			// phone number.
			if (SignUpInputs[1].value.split() !== '' | SignUpInputs[2].value.split() !== '0704803772'){
				NewUser.Number = SignUpInputs[1].value;
			}
			// password.
			if (SignUpInputs[2].value.split() !== ''){
				NewUser.Password = SignUpInputs[2].value;
			}
			
		}, true);
		
		// sign in button.
		_.Event(submitButtonSignIn, 'click', function(){
			// check inputs: Sign In
			for(var i = 0; i < SignInInputs.length; i++){
				if(SignInInputs[i].value.slice() == '0704803772' || SignInInputs[i].value.slice() == ''){
					SignInInputs[i].classList.add('error');
					SignInInputs[i].value = '';
				}else{
					SignInInputs[i].classList.remove('error');
				}
			}
		}, true);

	},
	ClientArea: function(){
		// user sign In: pull data from dataBase:
		// check number and password
		// signIn
		function userAuthr(data_1, data_2){
			_.Event(submitButtonSignIn, 'click', function(){
				// fill uservlaidator: fill number.
				if(SignInInputs[0].value.slice() == data_1 && SignInInputs[1].value.slice() == data_2){
					_.Print('passed..');
					window.location.assign('./pages/user.html');
				}else{
					_.Print('error..');
				}
	
				//connect to ADMIN dashboard.
				if(SignInInputs[0].value.slice() == '0704465049' && SignInInputs[1].value.slice() == '1234'){
					window.location.assign('./pages/admin.html');
				}else{
					_.Print('error..');
				}
			}, true);
			// check password.
		}
		// data base connection...
		_.Event(submitButtonSignIn, 'click', function(){
			let userreferance = db.collection("users").doc(`${SignInInputs[0].value.slice()}`);
			
			// SignUpInputs[i].value.split()
			userreferance.get().then((doc) => {
				if (doc.exists) {
					let jsondata = JSON.stringify(doc.data());
					let getjsondata = JSON.parse(jsondata);
					// user data extraction from dataBase.
					let userdatabasename =  getjsondata.name;
					let userdatabasepassword = getjsondata.password;
					let userdatabasetell = getjsondata.tellphone;
					
					userAuthr(getjsondata.tellphone, getjsondata.password);
					_.DB.Create('data', getjsondata.tellphone);
				} else {
					_.Print("error logging in ...")
				}
			}).catch((error) => {
				console.log("Error getting document:");
			});	
		}, true);


		// sign up: check if user exits if not write data to database:
		function userAuthrSignUp(){
			// store data to data base.
			if(NewUser.Name !== '' && NewUser.Number !== '' && NewUser.Password !== ''){
				// add new uaer to data base 
				App.dataBase.write(NewUser.Number, NewUser.Name, NewUser.Password);

				_.Select('.sucessMassage').classList.add('showsucesspopup');
				popup.classList.remove('showPortal');
				popup.classList.add('hidePortal');
				shadow.classList.add('extend');				
			}else{
				_.Print('No data stored');
			}
		}

		_.Event(submitButtonSignUp, 'click', function(){

			let userreferance1 = db.collection("users").doc(`${SignUpInputs[1].value.slice()}`);
			_.Print(SignUpInputs[1]);
			// SignUpInputs[i].value.split()
			userreferance1.get().then((doc) => {
				if (doc.exists) {
					let jsondata = JSON.stringify(doc.data());
					let getjsondata = JSON.parse(jsondata);
					// user data extraction from dataBase.
					let userdatabasename =  getjsondata.name;
					let userdatabasepassword = getjsondata.password;
					let userdatabasetell = getjsondata.tellphone;

					_.Print('user exists...');
				} else {
					userAuthrSignUp();
					_.Print("Login Successful ...")
				}
			}).catch((error) => {
				console.log("Error getting document:");
			});
		},true);


		
	}
}
App.buttonRresponse();
App.SignIn_SignUp_Error_Checking();
App.ClientArea();