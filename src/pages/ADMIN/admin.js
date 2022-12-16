// main application functionality.

let User = {
	buttonRresponse: function () {
		let userAccount = _.Select('.userAccount');
		let signUpHome = _.Select('.SignUpHome');
		let shadow = _.Select('.cover');

		_.Event(userAccount, 'click', function () {
			_.Select('.userAccount ol').classList.add('appendMenu');
			shadow.classList.add('extend');
		}, true);

		_.Event(signUpHome, 'click', function () {
			shadow.classList.add('extend');
		}, true);

		_.Event(shadow, 'click', function () {
			shadow.classList.remove('extend');
			_.Select('.userAccount ol').classList.remove('appendMenu');
		}, true)
	},
	AccountHandler() {
		_.Event('.submitsearch', 'click', function (){
			let searchedCContact = _.Select('.search');
			let userreferance = db.collection("users").doc(`${searchedCContact.value}`);
			
			userreferance.get().then((doc) => {
				if (doc.exists) {
					let jsondata = JSON.stringify(doc.data());
					let getjsondata = JSON.parse(jsondata);
					// user data extraction from dataBase.
					let userdatabasename = getjsondata.name;
					let userdatabasepassword = getjsondata.password;
					let userdatabasetell = getjsondata.tellphone;
					let userdatabsetikets = getjsondata.usertickets;
					let lastcount = getjsondata.counterStop;

					console.log(getjsondata);
				}else{
					console.log('error something went wrong....');
				}
			}).catch((error) => {
				console.log("Error getting document:", error);
			});
		});
	},
}

User.buttonRresponse();
User.AccountHandler();