var _paq = _paq || [];
/* tracker methods like "setCustomDimension" should be called before "trackPageView" */
var d=$("#matomo-subdomain-tracking").text();
if ("" != d) {
  _paq.push(["setCookieDomain", d]);
}
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function() {
  var u=$("#matomo-url").text();
  var siteid=$("#matomo-siteid").text();
  if ("" != u) {
    _paq.push(['setTrackerUrl', u+'piwik.php']);
    _paq.push(['setSiteId', siteid]);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
  }
})();
