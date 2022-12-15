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
		// connect and fill in user data using users number.
		// SignUpInputs[i].value.split()
		function getlocalstoragedata(){
			// Create an empty array to store the keys
				const keys = [];

				// Loop through all keys in the local storage
				for (let i = 0; i < localStorage.length; i++) {
				// Get the key at the current index
				const key = localStorage.key(i);

				// Push the key into the array
				keys.push(key);
			}

			// Log the keys to the console
			return keys[0];
		}
		

		function connecttodatabase(){
			let data = getlocalstoragedata();
		    _.Print(data);
			let userreferance = db.collection("users").doc(`${data}`);

			userreferance.get().then((doc) => {
				if (doc.exists) {
					let jsondata = JSON.stringify(doc.data());
					let getjsondata = JSON.parse(jsondata);
					// user data extraction from dataBase.
					let userdatabasename =  getjsondata.name;
					let userdatabasepassword = getjsondata.password;
					let userdatabasetell = getjsondata.tellphone;
				    // add user data.
					User.AddAndCollectUserData();

				} else {
					_.Print("error logging in ...")
				}
			}).catch((error) => {
				console.log("Error getting document:");
			});
		}
		connecttodatabase();

	},
	AddAndCollectUserData: function (){
		// add name.
		_.Select('.userIdName').innerHTML = userdatabasename

		// add and collect ticket data

	}
}

User.buttonRresponse();
User.UserAreaActions();