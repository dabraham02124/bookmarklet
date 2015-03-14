javascript:(
    function() {
	function imageP(url) {
	    var t=url.split('.');
	    var e=t[t.length-1].toLowerCase();
	    return {
		gif:1,jpg:1,jpeg:1,png:1,mng:1
	    }
	    [e]
	}
	function hrefEncode(s) {
	    return s.replace(/&/g,'&amp;').replace(/>/g,'&gt;').replace(/</g,'&lt;').replace(/"/g,'&quot;');
	}

	var doc=open().document;
	doc.write('<p>Images linked to by '+hrefEncode(location.href)+':</p><hr>');

	for (var i=0; var link=document.links[i]; ++i){
	    var href=link.href;
	    if ( href && imageP(href))
		doc.write('<p>'+link.innerHTML+' ('+hrefEncode(href)+')<br><img src="'+hrefEncode(href)+'">');
	}
	doc.close();
    }
)
()




