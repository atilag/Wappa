/* Wappa v1.0 - 09/Jan/2013
   http://wappa.sekta.es
   Copyright (c) 2013 Juan Gomez Mosquera - Licensed MIT */

var Wappa = (function($$, undefined) {

	function _init() {
		console.log("Wappa::init()!");
		$$('#buttonSearch').on( 'click',  function() {
			console.log("Wappa::click()!");
			Wappa.Tpb.search({
				data: $$('#inputSearch').val(),
				success: _showList,
				error: function(){ 
					console.error("Have errors!"); 
				},
				dataType: 'html'
			});
		});
	};

	function _showList(list) {
		var panel = document.getElementById('sectionList');
		if( panel.children.length == 0 ) {
			for (var i = 0; i < panel.childNodes.length; i++) {
				if (panel.childNodes[i].nodeType == document.COMMENT_NODE) {
	        		panel.innerHTML = panel.childNodes[i].nodeValue;
	        		break;
	      		}
	    	}
    	}

		$$(list).each(function(index,obj) {
			console.log(obj.title);
			$$('#ulList').append( Wappa.utils.createTorrentElement(obj) );	
		});
	};

	return{
		init: _init
	};

})($$ || Quo );


window.onload = function() {
  Wappa.init();
};
