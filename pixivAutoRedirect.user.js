// ==UserScript==
// @name         pixivAutoRedirect
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  try to take over the world!
// @author       You
// @match        https://www.pixiv.net/jump.php*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=pixiv.net
// @grant        none
// ==/UserScript==

(function() {
   const Link = document.links[0].href;
   window.location.href = Link;
})();
