(function() {
	var app = angular.module('store', []);

	app.controller('StoreController', function() {
		this.product = gem;
	});
	var gem = {
		name: 'Fuckin Gems',
		price: 2.95,
		description: 'Some mutha fuckin gem shit'
	}
})();