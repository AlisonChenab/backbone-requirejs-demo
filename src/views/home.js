define(['underscore','backbone','../models/home'],function(_, Backbone, Model){

	var Home = Backbone.View.extend({
		el: 'body',
		model: new Model,
		initialize: function(){
			this.render();
		},
		template: _.template($('#homeTemp').html()),
		render: function(){
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		},
		events: {
			"click .effect-list>li": "showEffect"
		},
		showEffect: function(){
			console.log(1111);
		}
	});

	return Home;
});