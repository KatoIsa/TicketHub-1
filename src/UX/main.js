// main application functionality.

let App = {
	DataBaseConfiguration:function (){ // fire base.

	},
	buttonRresponse: function (){
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
	UserAccountAndDbsConfiguration: function () {
		// chek user inputs: sign up section.
		let submitButtonSignIn  = _.Select('.submit-1');
		let submitButtonSignUp  = _.Select('.submit-2');
		let SignInInputs  = _.Select('.Sign-In div input', true);
		let SignUpInputs  = _.Select('.Sign-Up div input', true);

		function ErrorHandling(){
			// sign in button.
			_.Event(submitButtonSignIn, 'click', function(){
				// check inputs: Sign In
				for(var i = 0; i < SignInInputs.length; i++){
					if(SignInInputs[i].value.slice() == '256 705207***' || SignInInputs[i].value.slice() == ''){
						SignInInputs[i].classList.add('error');
						SignInInputs[i].value = '';
					}else{
						SignInInputs[i].classList.remove('error');
					}
				}
			}, true);


			// sign up button configuration...
			_.Event(submitButtonSignUp, 'click', function(){
				// check inputs: Sign Up name: number: password
				for(var i = 0; i < SignUpInputs.length; i++){
					if(SignUpInputs[i].value.split() == '' || SignUpInputs[i].value.split() == 'Kato Isa' || SignUpInputs[i].value.split() == '256 705207***'){
						SignUpInputs[i].classList.add('error');
						SignUpInputs[i].value = '';
					}else{
						SignUpInputs[i].classList.remove('error');
					}
				}
				// store user data.
				const NewUser = {
					Name: '',
					Number:'' ,
					Password: ''
				}
				// store name 
				if (SignUpInputs[0].value.split() !== '' | SignUpInputs[0].value.split() !== 'Kato Isa'){
					NewUser.Name = SignUpInputs[0].value;
				}
				// phone number.
				if (SignUpInputs[1].value.split() !== '' | SignUpInputs[2].value.split() !== '256 705207***'){
					NewUser.Number = SignUpInputs[1].value;
				}
				// password.
				if (SignUpInputs[2].value.split() !== ''){
					NewUser.Password = SignUpInputs[2].value;
				}
				// store data to data base.
				if(NewUser.Name !== '' && NewUser.Number !== '' && NewUser.Password !== ''){
					_.Print(NewUser);
				}else{
					_.Print('Data Pending...');
				}
			}, true);


		}
		ErrorHandling();
		// client area varification::  sign in varification
		const varified = {
			Number: '',
			password: ''
		}
		
	},
	ClientArea: function(){
		// user sign in: varification process.

	}
}

App.buttonRresponse();
App.UserAccountAndDbsConfiguration();
