define(['underscore',
	'backbone',
	'src/views/home'], 
function(_, Backbone, Home){
	
	var Router = Backbone.Router.extend({

		initialize: function(){
			Backbone.history.start(); 

			this.navigate('/home', {trigger: true});
		},

		routes: {
			'home': 'home',
			'search/:query': 'search'
		},

		home: function(){
			new Home();
		},
		search: function(query){

		}
		
	});

	return Router;
})