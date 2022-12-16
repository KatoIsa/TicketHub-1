// main application functionality.

let User = {
	buttonRresponse: function (){
		let userAccount = _.Select('.userAccount');
		let signUpHome = _.Select('.SignUpHome');
		let shadow = _.Select('.cover'); 

		_.Event(userAccount, 'click', function (){
			_.Select('.userAccount ol').classList.add('appendMenu');
			shadow.classList.add('extend');
		}, true);

		_.Event(signUpHome, 'click', function (){
			shadow.classList.add('extend');
		}, true);

		_.Event(shadow, 'click', function(){
			shadow.classList.remove('extend');
			_.Select('.userAccount ol').classList.remove('appendMenu');
		}, true)
	},
	AdminAuth: function (){
		let submitButton = _.Select('.submit-2');
		
		_.Event(submitButton, 'click', function (){
			let AdminRefer = db.collection("ADMIN").doc('0704465049');
			
			AdminRefer.get().then((doc) => {
				if (doc.exists) {
					let jsondata = JSON.stringify(doc.data());
					let getjsondata = JSON.parse(jsondata);
					
					if(_.Select('.inputnumber').value == getjsondata.number && _.Select('.inputPassword').value == getjsondata.password){
						
					}

				}
			}).catch((error) => {
				console.log("Error getting document:", error);
			});
		}, true);
	}
}

User.buttonRresponse();
User.AdminAuth();