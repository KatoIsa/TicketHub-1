
// site functionality: button responsivness
function buttonRresponse(){
	// collect ariables 
	let signInHome = document.querySelector('.SignInHome ');
	let signUpHome = document.querySelector('.SignUpHome');
	let shadow = document.querySelector('.cover');
	let popup = document.querySelector('.PortalCover');
	// sign up portal(pop up elements)
	let formData = document.querySelector('.AccountPortal .center .Sign-In')
	let signUpButtons = document.querySelectorAll('.AccountPortal .top div')
	let signIn = signUpButtons[0], signUp = signUpButtons[1];

	signInHome.addEventListener('click', ()=>{
		console.log('hello', formData)
		shadow.classList.add('extend');
		popup.classList.remove('hidePortal');
		popup.classList.add('showPortal');
	})
	signUpHome.addEventListener('click', ()=>{
		shadow.classList.add('extend');
		popup.classList.remove('hidePortal');
		popup.classList.add('showPortal');

	})

	shadow.addEventListener('click', ()=>{
		popup.classList.remove('showPortal');
		popup.classList.add('hidePortal');
		shadow.classList.remove('extend');

	})

	// sign in and sign up pop up functionality
	signIn.addEventListener('click', ()=>{
		formData.classList.add('displaySignIn')
	})
	signUp.addEventListener('click', ()=>{
		formData.classList.remove('displaySignIn')
	})

}
buttonRresponse()