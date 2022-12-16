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
			window.location.assign('index.html');
		}, true);

		_.Event(shadow, 'click', function () {
			shadow.classList.remove('extend');
			_.Select('.userAccount ol').classList.remove('appendMenu');
		}, true)
	},
	AccountHandler() {
		_.Event('.submitsearch', 'click', function (){
			let searchedCContact = _.Select('.searchInputarea');
			let userreferance = db.collection("users").doc(`${searchedCContact.value}`);
			console.log(searchedCContact.value);

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

					function addElement(UserLoginname, UserLoginnumber, UserLoginTickets, UserLogInTransaction) {
						let elementData = `
						<div class="person">
						<div class="row namewrapper">
							<div class="nameHead"><tt>Name</tt></div>
							<div class="name"><tt>${UserLoginname}</tt></div>
						</div>
						<div class="row numberwrapper">
							<div class="numberHead"><tt>Number</tt></div>
							<div class="number"><tt>>${UserLoginnumber}</tt></div>
						</div>
						<div class="row ticketIDwrapper">
							<div class="ticketNoHead"><tt>Ticket</tt></div>
							<div class="ticketNo"><tt><span>#C</span>${UserLoginTickets}</tt></div>
						</div>
						<div class="row numberwrapper">
							<div class="numberHead"><tt>Trans ID</tt></div>
							<div class="number"><tt>${UserLogInTransaction}</tt></div>
						</div>
						<div class="row numberwrapper">
							<div class="numberHead"><tt>--></tt></div>
							<div class="number"><button class="verifyUser">Verify</button></div>
						</div>
					</div>
						`
						let SearchResults = _.Select('.SearchResults');
						SearchResults.innerHTML = elementData;
					}

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