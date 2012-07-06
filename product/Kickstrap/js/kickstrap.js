	function appendMagic(appendee) {
		document.write(stripslashes($(appendee).css('content')));
		function stripslashes(str) {
			str=str.replace(/\\'/g,'\'');
			str=str.replace(/\\"/g,'"');
			str=str.replace(/\\0/g,'\0');
			str=str.replace(/\\\\/g,'\\');
			str=str.substring(1,str.length-1);
			return str;
		}
	}
	
	function clearCache() {
		localStorage.clear() // My name sounds nicer. :)
		console.log('Cache has been cleared. Reloading...');
		location.reload(true);
	}
	
	function consoleLog(msg, msgType) {
		if(typeof window.consoleLogger == 'function') {
			consoleLogger(msg, msgType);
		}
	}

