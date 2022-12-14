// main application functionality.

let User = {
	buttonRresponse: function (){
		let userAccount = _.Select('.userAccount');
		let signUpHome = _.Select('.SignUpHome');
		let shadow = _.Select('.cover');

		_.Event('.TicketsMenuButton', 'click', function(){
			_.Select('.TicketContentsBody').classList.add('showTickets');
			_.Select('.ConcertContentsBody').classList.add('hideConcerts');
			_.Select('.TicketsMenuButton').classList.add('Active');
			_.Select('.ConcertsMenuButton').classList.remove('Active');

		}); 

		_.Event('.ConcertsMenuButton', 'click', function(){
			_.Select('.TicketContentsBody').classList.remove('showTickets');
			_.Select('.ConcertContentsBody').classList.remove('hideConcerts');
			_.Select('.ConcertsMenuButton').classList.add('Active');
			_.Select('.TicketsMenuButton').classList.remove('Active');

		}); 

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
		}, true);

		
	},
	UserAreaActions: function (){
		for (var i=1; i <= localStorage.length; i++)  {
			_.Print(localStorage.getItem(i))
		 }
		// let userreferance = db.collection("users").doc(``);
			
		// 	// SignUpInputs[i].value.split()
		// 	userreferance.get().then((doc) => {
		// 		if (doc.exists) {
		// 			let jsondata = JSON.stringify(doc.data());
		// 			let getjsondata = JSON.parse(jsondata);
		// 			// user data extraction from dataBase.
		// 			let userdatabasename =  getjsondata.name;
		// 			let userdatabasepassword = getjsondata.password;
		// 			let userdatabasetell = getjsondata.tellphone;
					
		// 			userAuthr(getjsondata.tellphone, getjsondata.password)
		// 		    _.DB.Create(userdatabasetell, jsondata);
		// 		} else {
		// 			_.Print("error logging in ...")
		// 		}
		// 	}).catch((error) => {
		// 		console.log("Error getting document:");
		// 	});	
	}
}

User.buttonRresponse();
User.UserAreaActions();