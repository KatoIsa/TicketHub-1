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
		const firestore = firebase.firestore();
		const collection = firestore.collection('collectionName');

		collection.get()
			.then((snapshot) => {
				snapshot.forEach((doc) => {
					console.log(doc.id, '=>', doc.data());
				});
			})
			.catch((err) => {
				console.log('Error getting documents', err);
			});
	},
	// UserData() {
	// 	// Assume that you have a reference to your Firestore database
	// 	const db = firebase.firestore();

	// 	// Define a function to retrieve all documents from a collection
	// 	async function getAllDocuments(collection) {
	// 		const snapshot = await collection.get();
	// 		const documents = [];
	// 		snapshot.forEach((doc) => {
	// 			documents.push(doc.data());
	// 		});
	// 		return documents;
	// 	}

	// 	// Call the function to retrieve all documents from the "users" collection
	// 	const usersCollection = db.collection('users');
	// 	const users = await getAllDocuments(usersCollection);

	// 	// The "users" array now contains all documents from the "users" collection
	// 	console.log(users);

	// }
}

User.buttonRresponse();
User.AccountHandler();