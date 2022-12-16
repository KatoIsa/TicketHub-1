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

					console.log(getjsondata.number, getjsondata.Password);
                    console.log(_.Select('.inputPassword').value,_.Select('.inputnumber').value );

					if(_.Select('.inputnumber').value == getjsondata.number && _.Select('.inputPassword').value == getjsondata.Password){
                        async function updateData() {
                            _.Print('running please wait...');
                            AdminRefer.update({
                                Authr: true
                            });

                        }
                        async function goTohome() {
                            await updateData();
                            _.Print('function finished executing...');
                            window.location.assign('home-admin.html');
                        } goTohome();
					}else{
                        alert('error logging in..')
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