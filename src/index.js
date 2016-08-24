// config
require.config({
	'baseUrl': '',
	'paths': {
		'jquery':'libs/js/jquery-3.1.0.min',
		'underscore': 'libs/js/underscore-min',
		'backbone': 'libs/js/backbone-min'
	},
	'shim': {
		backbone: {
			'deps': ['jquery', 'underscore'],
			'exports': 'Backbone'
		},
		underscore: {
			'exports':'_'
		}
	}
});

// entry
require(['underscore','backbone','./src/router'],function(_, Backbone, Router){
	var router = new Router();
	console.log(router);
})