function homeController(inReact, storageHandler) {
    var vm = this;
    vm.isInReact = inReact;
};

function loginController($state) {
    var vm = this;
    vm.pageTitle = $state.$current.data.pageTitle;
    vm.submit = submit;
    vm.user = {};
    vm.getUserFromStorage = storageHandler($state);

    function submit() {
    	vm.getUserFromStorage.getUserFromStorage(vm.user, 'users');
	}
};
function registerController(){
	var vm = this;
}

angular.module('registrationApp').controller('homeController', homeController);
angular.module('registrationApp').controller('loginController', loginController);
angular.module('registrationApp').controller('registerController', registerController);
