var script = document.createElement("script");
script.setAttribute("type", "text/javascript");
script.innerHTML = tweetPopup + generateTweetLink;
document.head.appendChild(script);


function makeTweetFiller(){
    var tweetFiller = document.createElement('span');
    tweetFiller.innerHTML = " | ";
    return tweetFiller;
}

function createTweetLink(title, link){
    title = encodeURI(title); // just in case there are things that will break the onClick statement

    var tweetLink = document.createElement('a');
    tweetLink.href= generateTweetLink(title, link);
    tweetLink.setAttribute("onClick", "return tweetPopup('" + title + "', '" + link + "');");
    tweetLink.target = "_blank";
    tweetLink.rel = "nofollow";
    tweetLink.innerHTML = 'tweet';
    return tweetLink;
}

function generateTweetLink(title, link){
    var baseUrl = "http://twitter.com/share";
    var encodedLink = encodeURI(link);
    var related = "wesleyzhao";
    
    var finalUrl = baseUrl + "?" + "url=" + encodedLink + "&text=" + title + "&related=" + related;

    return finalUrl;
}

function tweetPopup(title, link){
    var tweetLink = generateTweetLink(title, link);
    
    window.open(tweetLink, "tweet", "height=450,width=550,resizable=1");

    return false;
}

createTweetButtons();

function createTweetButtons(){
    var titles = document.getElementsByClassName('title');
    var subtexts = document.getElementsByClassName('subtext');
    
    for(var i = 0; i < subtexts.length ; i++){
	var title_i = i*2 + 1; // it's every odd number
	try{
	    var link = getLinkElement(titles[title_i]);
	}
	catch(err){
	    var link = getLinkElement(titles[i]);
	}
	appendTweetLink(link, subtexts[i]);
    }
    
    return true;
}

function getLinkElement(titleEl){
    var link = titleEl.getElementsByTagName('a')[0];
    return link;
}

function appendTweetLink(linkEl, subtextEl){
    // first get the link and the title
   // var link = titleEl.getElementsByTagName('a')[0];
    var link_title = linkEl.innerHTML;
    var link_url = linkEl.href;
    
    // now deal with subtext
    subtextEl.appendChild(makeTweetFiller());
    subtextEl.appendChild(createTweetLink(link_title, link_url));
    
    return true;
}