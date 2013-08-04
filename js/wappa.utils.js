Wappa.utils = (function(){
	
	function _isNumeric(obj){
		return !isNaN( parseFloat(obj) ) && isFinite( obj );
	};

	function _createTorrentElement(obj) {
		if( obj == undefined || obj.title == undefined || obj.magnet == undefined )
			return;

		console.log( obj.title );
		return $$('<li>').append( $$('<span>').attr('data-link', obj.magnet).text(obj.title) );
	};

	return {
		isNumeric : _isNumeric,
		createTorrentElement : _createTorrentElement
	};
})();