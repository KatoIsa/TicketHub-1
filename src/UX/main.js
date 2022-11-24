// main application functionality.

let App = {
	// button response.
	buttonRresponse: function (){
		let userAccount = _.Select('.userAccount');
		let signInHome = _.Select('.SignInHome ');
		let signUpHome = _.Select('.SignUpHome');
		let shadow = _.Select('.cover');
		let popup = _.Select('.PortalCover');
		// sign up portal(pop up elements)
		let formData = _.Select('.AccountPortal .center .Sign-In')
		let signUpButtons = _.Select('.AccountPortal .top div', true)
		let signIn = signUpButtons[0], signUp = signUpButtons[1];
		_.Event(userAccount, 'click', function (){
			_.Select('.userAccount ol').classList.add('appendMenu')
			shadow.classList.add('extend');
		}, true)

		_.Event(signInHome, 'click', function (){
			shadow.classList.add('extend');
			popup.classList.remove('hidePortal');
			popup.classList.add('showPortal');
			_.Select('.AccountPortal .Title2 h2').classList.add('Active')
			_.Select('.AccountPortal .Title h2').classList.remove('Active')
			formData.classList.add('displaySignIn')

		}, true)
		
		_.Event(signUpHome, 'click', function (){
			shadow.classList.add('extend');
			popup.classList.remove('hidePortal');
			popup.classList.add('showPortal');
			_.Select('.AccountPortal .Title h2').classList.add('Active')
			_.Select('.AccountPortal .Title2 h2').classList.remove('Active')
			formData.classList.remove('displaySignIn')

		}, true)

		_.Event(shadow, 'click', function(){
			popup.classList.remove('showPortal');
			popup.classList.add('hidePortal');
			shadow.classList.remove('extend');
			_.Select('.userAccount ol').classList.remove('appendMenu')
		}, true)

		// sign in and sign up pop up functionality
		_.Event(signIn, 'click', function(){
			formData.classList.add('displaySignIn')
			_.Select('.AccountPortal .Title2 h2').classList.add('Active')
			_.Select('.AccountPortal .Title h2').classList.remove('Active')
		}, true)
		
		_.Event(signUp, 'click', function(){
			formData.classList.remove('displaySignIn')
			_.Select('.AccountPortal .Title2 h2').classList.remove('Active')
			_.Select('.AccountPortal .Title h2').classList.add('Active')
		}, true)
	},

	// user acount and database configuron for user login
	UserAccountAndDbsConfiguration: function () {
		// chek user inputs: sign up section.
		let submitButton  = _.Select('.submit')
		let SignInInputs  = _.Select('.Sign-In div input', true);
		let SignUpInputs  = _.Select('.Sign-Up div input', true);
		_.Event(submitButton, 'click', function(){
			// check inputs: Sign Up
			// name
			if(SignUpInputs[0].value.trim() == ''){
				alert('error')
			}else{
				alert('passed')
			}
			// numbere
			if(SignUpInputs[1].value.trim() == ''){
				alert('error')
			}else{
				alert('passed')
			}
			// password
			if(SignUpInputs[2].value.trim() == ''){
				alert('error')
			}else{
				alert('passed')
			}
			// check inputs: Sign In
		}, true);
	},
	VarifiedUserArea: function(){

	}
}

App.buttonRresponse();
App.UserAccountAndDbsConfiguration();