/* Wappa v1.0 - 09/Jan/2013
   http://wappa.sekta.es
   Copyright (c) 2013 Juan Gomez Mosquera - Licensed MIT */

var Wappa = (function($$, undefined) {

	function _init() {
		console.log("Wappa::init()!");

		$$("#buttonSearch").on( "click",  function(e) {
			e.preventDefault();
			console.log("Wappa::click()!");
			Wappa.Tpb.search({
				data: $$("#inputSearch").val(),
				success: _showList,
				error: function(){ 
					console.error("Have errors!"); 
				},
				dataType: 'html'
			});
		});

		$$(".icon-menu").on("click", function(e) {
			$$("#configMain").show();
		});

		$$("#sectionList button").on("click", function(e) {
			$$("#sectionList").hide();			
			$$("#torrentSearch").show();
		});

		$$("#configMain button").on("click", function(e) {
			$$("#configMain").hide();			
		});

		/*$$("#shares").on("touchend", function(e){
			$$(this).hide();			
		});*/

		/* Create dynamic DOM elements */
		Wappa.Config.getShares().forEach(function(element) {
			$$("#shares ul").append( Wappa.Utils.createShareElement(element) );
		});

	}

	function _showList(list) {
		$$("[role='region']").hide();
		$$("#sectionList").show();
		//$$("#torrentSearch").hide();

		/*var panel = document.getElementById('sectionList');
		if( panel.children.length == 0 ) {
			for (var i = 0; i < panel.childNodes.length; i++) {
				if (panel.childNodes[i].nodeType == document.COMMENT_NODE) {
	        		panel.innerHTML = panel.childNodes[i].nodeValue;
	        		break;
	      		}
	    	}
    	}*/

		$$(list).each(function(index,obj) {
			console.log(obj.title);
			$$("#ulList").append( Wappa.Utils.createTorrentElement(obj) );	
		});

		$$("[data-link]").on("hold", function(e) {
				console.log("Holding: " + this.getAttribute("data-link"));
				_showShares(e);

		});

	}

	function _showShares(event) {
		var x = event.originalEvent.touches[0].pageX;
		var y = event.originalEvent.touches[0].pageY;
		var height = parseInt( $$("#shares").css("height") ) / 2;
		var width = parseInt( $$("#shares").css("width") ) / 2;
		//console.log("pageX = " + x + " pageY = " + y);
		$$("#shares").style("top", (y - height) + "px").style("left", (x - width) + "px");
		$$("#shares img").style("animation-play-state", "running");
		$$("#shares img").on('animationend', function() {
			$$("#shares img").style("animation-play-state", "paused");
		});

		$$("#shares").show();
	}




	return{
		init: _init
	};

})($$ || Quo );

document.addEventListener("DOMContentLoaded", function(e) {
	Wappa.init();
}, false);