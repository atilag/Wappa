Wappa.Tpb = (function( wappa, $$, undefined){
	
	var _options;
	/**
	*
	*
	*/
	var _search = function(options) {
		if( options === undefined || options.data === undefined || options.success === undefined )
			return;

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
			error: options.error
		});
	};


	var _onSuccess = function(context, response) {
		console.log( "Text: '" + response.responseText + "' Length: " + response.responseText.Length );
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


	var _getTorrentTitle = function(element) {
		if( $$(element).hasClass('detLink') )
			return $$(element).text();
	};

	var _getTorrentMagnet = function(element) {
		var href = $$(element).attr('href');
		if( href.indexOf('magnet:') != -1 ) 
			return href;
	};

	return {
		search: _search,
		onSuccess: _onSuccess
	};

})( Wappa, ($$ || window.Quo) );