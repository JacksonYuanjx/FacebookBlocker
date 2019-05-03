
// Author: Jackson Yuan 2019
// Extension was written on request for a friend who wanted to access Facebook messenger but not the main site
// to prevent any distractions from the news feed.


chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        if (details.url.startsWith("https://www.facebook.com")) {
            var urlRegex = new RegExp("messages");
            if (!urlRegex.test(details.url)) {
                // if user is not on messenger, then redirect to messenger
                return { redirectUrl: "https://www.facebook.com/messages" };
            }
        }
    }, {
        urls: ["<all_urls>"], 
        types: ['main_frame', 'sub_frame']
    }, ["blocking"]);