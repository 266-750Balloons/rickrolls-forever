//Rickroll content script
var body = document.body;
var rickRedirect = document.createElement("meta");
rickRedirect.httpEquiv = "refresh";
rickRedirect.content = "0, url='https://www.youtube.com/watch?v=dQw4w9WgXcQ'";
body.appendChild(rickRedirect);