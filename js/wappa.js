/* Wappa v1.0 - 09/Jan/2013
   http://wappa.sekta.es
   Copyright (c) 2013 Juan Gomez Mosquera - Licensed MIT */

window.addEventListener('load', function onload() {
  window.removeEventListener('load', onload);
  Wappa.init();
});

var Wappa = (function($$, undefined) {

	var init = function() {
		$$('#buttonSearch').on( 'click',  function() {
			Wappa.Tpb.search({
				data: $$('#inputSearch').val(),
				success: showList,
				error: function(){ alert("Have errors!"); },
				dataType: 'html'
			});
		});
	};

	var showList = function(list) {
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
		init: init
	};

})($$ || Quo );

