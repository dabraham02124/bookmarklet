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
	function getImg(s) {
	    return "<IMG style=\"max-width:98%;\" SRC=\""+s+"\"><BR><A HREF=\""+s+"\">"+s+"<BR>";
	}

	var doc = open().document;
	var links = document.links;

	for (var i=0; i < links.length ;++i) {
	    var href = links[i].href;
	    if (href && imageP(href)) {
		doc.write(getImg(href)+"<BR>");
            }
	}
	doc.close();
    }
)
()
