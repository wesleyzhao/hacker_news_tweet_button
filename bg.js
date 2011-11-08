function checkForValidUrl(tabId, changeInfo, tab){
    if (tab.url.indexOf('http://www.facebook.com') > -1){
	chrome.pageAction.show(tabId);
    }
}

chrome.tabs.onUpdated.addListener(checkForValidUrl);
/*
chrome.tabs.getSelected(null, function(tab) {
    chrome.pageAction.show(tab.id);
});
*/