define(['underscore','backbone'],function(_, Backbone){

	var Home = Backbone.Model.extend({
		defaults: {
			effect: {
				'bounce': ['bounce', 'bounceIn', 'bounceOut'],
				'fade': ['fadeIn', 'fadeOut']
			}
		}
	});

	return Home;
});