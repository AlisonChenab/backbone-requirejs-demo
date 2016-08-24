define(['underscore','backbone'], function(_, Backbone){
	
	var tool = {
		getQueryString(name) {
			var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
			var r = window.location.search.substr(1).match(reg);
			if (r != null) return unescape(r[2]); return null;
		}
	}

	return tool;
})