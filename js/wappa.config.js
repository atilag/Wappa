Wappa.Config = (function(wappa, $$, undefined) {
	
	
	function _getShares() {
		return [ { 
			name : "Delgue"
		},
		{
			name : "uTorrent"
		},
		{
			name : "Whatsapp"
		} ];

	}

	return {

		getShares : _getShares

	};

})(Wappa, $$);