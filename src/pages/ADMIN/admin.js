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
		_.Event(_.Select(), 'click', function (){
			let AdminRefer = db.collection("ADMIN").doc('0704465049');
			
			AdminRefer.get().then((doc) => {
				if (doc.exists) {
					let jsondata = JSON.stringify(doc.data());
					let getjsondata = JSON.parse(jsondata);
					// user data extraction from dataBase.
					_.Print(getjsondata);

				}
			}).catch((error) => {
				console.log("Error getting document:", error);
			});
		});
	}
}

User.buttonRresponse();
User.AdminAuth();