var analyticsLink = "https://www.google-analytics.com/collect?v=1&t=event&tid=UA-58418174-3"



// DISTRIBUTION (7)

var downloadEventHeader = ["distribution", "download", "message_header", "1"]
var downloadEventWelcome = ["distribution", "download", "message_welcome", "1"]
var downloadEventPro = ["distribution", "download", "message_pro", "1"]

var buyEventWelcome = ["distribution", "buy", "message_welcome", "1"]
var buyEventPro =["distribution", "buy", "message_pro", "1"]

var shareEventTwitter = ["distribution", "share", "twitter", "1"]
var shareEventFacebook = ["distribution", "share", "facebook", "1"]



// LEANING (7)

var watchEventDemo = ["learn", "watch", "plugin_demo", "1"]
var watchEventImportStates = ["learn", "watch", "import_states", "1"]
var watchEventExportPrototype = ["learn", "watch", "export_prototype", "1"]
var watchEventImportStatesButton = ["learn", "watch", "import_states_button", "1"]
var watchEventExportPrototypeButton = ["learn", "watch", "export_prototype_button", "1"]

var readEventImportStates = ["learn", "read", "import_states", "1"]
var readEventExportPrototype = ["learn", "read", "export_prototype", "1"]





// SUPPORT (1)

var supportEvent = ["support", "contact", "message_header", "1"]



var composeLink = function(request) {
    return analyticsLink + "&cid=" + "557" + "&ec=" + request[0] + "&ea=" + request[1] + "&el=" + request[2] + "&ev=" + request[3]
}


var sendEvent = function(link) {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	       alert("ok")
	    }
	};
	xhttp.open("GET", link, true);
	xhttp.send();
}
