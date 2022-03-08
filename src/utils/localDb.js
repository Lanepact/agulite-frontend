const getDb = async () => {
	return new Promise((resolve, reject) => {
        let request = window.indexedDB.open("AGULITE", 1);
        
        request.onerror = e => {
            console.log('Error opening db', e);
            reject('Error');
        };

        request.onsuccess = e => {
            resolve(e.target.result);
        };
        
        request.onupgradeneeded = e => {
            console.log('onupgradeneeded');
            let db = e.target.result;
            let objectStore = db.createObjectStore("user", { autoIncrement: true, keyPath:'id' });
        }
	})
}

export const getUserFromDb = async () => {
    const db = await getDb()

	return new Promise((resolve, reject) => {

		let trans = db.transaction(['user'],'readonly');
		trans.oncomplete = e => {
			resolve(user[0]);
		};
		
		let store = trans.objectStore('user');
		let user = [];
		
		store.openCursor().onsuccess = e => {
			let cursor = e.target.result;
			if (cursor) {
				user.push(cursor.value)
				cursor.continue();
			}
		};

	});
}

export const storeUserInDb = async (user) => {
    const db = await getDb()

	return new Promise((resolve, reject) => {

        let trans = db.transaction(['user'],'readwrite');
        trans.oncomplete = e => {
            resolve();
        };

        let store = trans.objectStore('user');
        store.add(user);

	});
}

export const deleteUserFromDb = async () => {
    const db = await getDb()

	return new Promise((resolve, reject) => {
        let trans = db.transaction(['user'],'readwrite');
        trans.oncomplete = e => {
            resolve();
        };

        let store = trans.objectStore('user');
        store.clear();
	});
}