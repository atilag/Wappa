Wappa.Utils = (function(){
	
	function _isNumeric(obj){
		return !isNaN( parseFloat(obj) ) && isFinite( obj );
	}

	function _createTorrentElement(obj) {
		if( obj == undefined || obj.title == undefined || obj.magnet == undefined )
			return;

		console.log( obj.title );
		return $$("<li>").append( $$("<span>").attr("data-link", obj.magnet).text(obj.title) );
	}

	function _createShareElement(element) {
		if( element == undefined )
			return;

		return $$("<li>").append( $$("<img>").attr("src", "style/images/default-share.png") );
	}

	return {
		isNumeric : _isNumeric,
		createTorrentElement : _createTorrentElement,
		createShareElement : _createShareElement
	};
})();