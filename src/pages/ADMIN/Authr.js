// main application functionality.

let Authr = {
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
User.AdminAuth();