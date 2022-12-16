// main application functionality.

let User = {
	buttonRresponse: function (){
		let userAccount = _.Select('.userAccount');
		let signUpHome = _.Select('.SignUpHome');
		let shadow = _.Select('.cover');
		let BuyPopUpbutton = _.Select('.arrowBody');
		let buyPopUpWindow = _.Select('.paymentsetup');

		
		_.Event(signUpHome, 'click', function (){
			window.location.assign('../index.html');
		}, true);

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

		_.Event(shadow, 'click', function(){
			shadow.classList.remove('extend');
			_.Select('.userAccount ol').classList.remove('appendMenu');
			buyPopUpWindow.classList.remove('showpaymentsetup');

		}, true);

		_.Event(BuyPopUpbutton, 'click', function(){
			buyPopUpWindow.classList.add('showpaymentsetup');
			shadow.classList.add('extend');
		}, true);
		_.Event('.paymentbody .submitButton .close', 'click', function(){
			buyPopUpWindow.classList.remove('showpaymentsetup');
			shadow.classList.remove('extend');
		});
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
		    console.log(data);
			let userreferance = db.collection("users").doc(`${data}`);

			userreferance.get().then((doc) => {
				if (doc.exists) {
					let jsondata = JSON.stringify(doc.data());
					let getjsondata = JSON.parse(jsondata);
					// user data extraction from dataBase.
					let userdatabasename =  getjsondata.name;
					let userdatabasepassword = getjsondata.password;
					let userdatabasetell = getjsondata.tellphone;
					let userdatabsetikets = getjsondata.usertickets;
					let lastcount = getjsondata.counterStop;
					let counter = 0;
					if(lastcount != 0){counter = lastcount}

				    // add user name.
					_.Select('.userIdName').innerHTML = userdatabasename;
					// buying tickets...
					function buyTickets(){
						_.Event('.paymentbody .submitButton .submit', 'click', function (){
							counter++
							// check phone number and check varification ID.
							let numberInput = _.Select('.paymentnumber .numberInput');
							let TransactionID = _.Select('.paymentnumber .varificaionCodeInput');

							function validate(input) {
								var validPhoneNumber = /^\d{10}$/;
								var validTRid = /^\d{11}$/;
								if (numberInput.value.match(validPhoneNumber) && TransactionID.value.match(validTRid)) {
									console.log('varification compeleted successfully ...');
									numberInput.classList.remove('verificationError');
									TransactionID.classList.remove('verificationError');
									numberInput.classList.add('verificationSuccessfull');
									TransactionID.classList.add('verificationSuccessfull');
									ticketsGenratorAlgorythm();
									// store ticketData. verificationSuccessfull

								}
								else {
									numberInput.classList.add('verificationError');
									TransactionID.classList.add('verificationError');
									numberInput.classList.remove('verificationSuccessfull');
									TransactionID.classList.remove('verificationSuccessfull');
									numberInput.value = 'enter valid number';
									TransactionID.value = 'enter valid Trans ID';
									console.log('varification error...');
								}
							}validate(numberInput.value.split());

						});
					}buyTickets();

					// ticket data.
					function ticketsGenratorAlgorythm(ticketnumber){
						// random number algorythm.
						function randomNumberAlgorythm() {
							// Generate an array of 5 random numbers between 0 and 10
							var randomNumbers = [];

							for (var i = 0; i < 5; i++) {
								randomNumbers.push(Math.floor(Math.random() * 10));
							}
							// convert array to into a single number.
							var backedTicketNumber = randomNumbers.join("");
							return backedTicketNumber;
						}
						// add ticket number to datbase
						userreferance.update({
							[`usertickets${counter}`]: randomNumberAlgorythm(),
							counterStop: counter + 1
						});
						// create ticket body.
						function ticketbuilder() {							
							let ticketsData = `<div class="ticketnumber"><tt><span>#C</span>${7777}</tt></div>`;
							let ticketBody = _.Select('.TicketContentsBody');
							let elementData = document.createElement('div');
							elementData.innerHTML = ticketsData;
							elementData.classList.add("ConcertTicket");
							ticketBody.appendChild(elementData);
							// collect all tickets from dataBase.
							let getAllTickets = [];
							// get all keys.
							let AllDataBasekeys = Object.keys(getjsondata);
							_.Print(AllDataBasekeys);

							const words = ['apple', 'ape', 'banana', 'bat', 'cat', 'car'];
							const newArray = [];

							for (let i = 0; i < words.length; i++) {
								const word = words[i];
								const firstThreeLetters = word.substring(0, 3);

								// Check if the first three letters of the current word match the first three letters of any previous word
								if (newArray.some(prevWord => prevWord.substring(0, 3) === firstThreeLetters)) {
									// If a match is found, push the current word into the new array
									newArray.push(word);
								}
							}console.log(newArray);

						}ticketbuilder();
					}
				}
			}).catch((error) => {
				console.log("Error getting document:");
			});
		}
		connecttodatabase();

	}
}

User.buttonRresponse();
User.UserAreaActions();