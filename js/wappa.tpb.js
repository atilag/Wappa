Wappa.Tpb = (function( wappa, $$, undefined){
	
	var _options;
	/**
	*
	*
	*/
	function _search(options) {
		if( options === undefined || options.data === undefined || options.success === undefined )
			return;

		console.log("Wappa.Tpb.search(): options.data = " + options.data );
		_options = options;
		$$.ajaxSettings.timeout = 10000;

		
		$$.ajax({
			type: 'GET',
			url: 'http://thepiratebay.se/search/' + encodeURIComponent(options.data) + '/0/99/0',
			//data: { q: options.data, page: '0', orderby: '99' },
			//data: { '': options.data, '':'/0/99/0'},
			dataType: 'html',
			async: true,
			success: _onSuccess,
			error: _options.error
		});
	};


	function _onSuccess(context, response) {
		console.log( "Text: '" + response.responseText + "' Length: " + response.responseText.length );
		$$('#tempResults').append( response.responseText ).hide();
		var list = [];
		var listIdx = 0;
		$$('#searchResult', 'tr').each( function(index, element){
			var torrentInfo = {};
			/* TODO: Y si find() no encuentra nada? que pasa aqui */
			$$(element).find('td').each( function(tdIndex, tdElement){
				$$(tdElement).find('a').each( function(aIndex, aElement){
					torrentInfo.title = _getTorrentTitle(aElement) || torrentInfo.title;
					torrentInfo.magnet = _getTorrentMagnet(aElement) || torrentInfo.magnet;
				});
				//torrentInfo.seekers
				//torrentInfo.leechers
			});

			if( torrentInfo !== undefined && torrentInfo.title !== undefined
										  && torrentInfo.magnet !== undefined)
				list.push(torrentInfo);

		});

		_options.success(list);
	};


	function _getTorrentTitle(element) {
		if( $$(element).hasClass('detLink') )
			return $$(element).text();
	};

	function _getTorrentMagnet(element) {
		var href = $$(element).attr('href');
		if( href.indexOf('magnet:') != -1 ) 
			return href;
	};

	return {
		search: _search,
		onSuccess: _onSuccess
	};

})( Wappa, ($$ || window.Quo) );