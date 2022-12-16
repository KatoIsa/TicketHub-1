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
					_.Print(jsondata);
					if(_.Select('.inputnumber').value == getjsondata.number && _.Select('.inputPassword').value == getjsondata.password){
                        async function updateData() {
                            _.Print('running please wait...');
                            userreferance.update({
                                Authr: true
                            });

                        }
                        async function goTohome() {
                            await updateData();
                            _.Print('function finished executing...');
                        } goTohome();
					}

				}else{
                    console.log('error cant retrieve data..');
                }
			}).catch((error) => {
				console.log("Error getting document:", error);
			});
		}, true);
	}
}
Authr.AdminAuth();