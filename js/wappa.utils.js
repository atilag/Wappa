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

	function _printObject(obj) {
		for(var prop in obj) {
			console.log(prop + ": " + obj[prop]);
		}
	}

	return {
		isNumeric : _isNumeric,
		printObject : _printObject,
		createTorrentElement : _createTorrentElement,
		createShareElement : _createShareElement
	};
})();