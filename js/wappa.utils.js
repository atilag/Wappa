Wappa.utils = (function(){
	
	var _isNumeric = function(obj){
		return !isNaN( parseFloat(obj) ) && isFinite( obj );
	};

	var _createTorrentElement = function(obj) {
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