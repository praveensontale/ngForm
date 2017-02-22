function storageHandler($state) {
    var vm = this;

    function getUserFromStorage(obj, fromObj) {

        if (typeof(Storage) !== "undefined") {
            var data = JSON.parse(sessionStorage.getItem(fromObj));
            if (data !== null) {
                if (data[0].email === email && data[0].password === password) {
                    sessionStorage.setItem('login', true);
                } else {
                    alert('somthing wrong');
                }
            } else {
                alert("Storage is empty");
                $state.go('register');
            }
        } else {
            alert('browser dont support storage');
        }
    }
    return {
        getUserFromStorage: getUserFromStorage
    }
}


angular.module('registrationApp').service('storageHandler', storageHandler);