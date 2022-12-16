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
	AccountHandler(){
		let AdminRefer = db.collection("ADMIN").doc('0704465049');
			
			AdminRefer.get().then((doc) => {
				if (doc.exists) {
					let jsondata = JSON.stringify(doc.data());
					let getjsondata = JSON.parse(jsondata);
					// check if valid?
					if(getjsondata.Authr = true){
						// Get the document reference
						const docRef = firestore.doc('users');

						// Get all collections in the document
						docRef.listCollections().then(collections => {
							console.log(collections);
						});
					}else{
						window.location.assign('index.html');
					}
				}else{
                    console.log('error cant retrieve data..');
                }
			}).catch((error) => {
				console.log("Error getting document:", error);
			});
	}
}

User.buttonRresponse();