// ==UserScript==
// @name         pixivAutoRedirect
// @version      1.0.0
// @homepageURL https://github.com/soysource651/pixivAutoRedirect
// @updateURL   https://github.com/soysource651/pixivAutoRedirect/raw/main/pixivAutoRedirect.user.js
// @downloadURL https://github.com/soysource651/pixivAutoRedirect/raw/main/pixivAutoRedirect.user.js
// @description  test
// @author       soysource651
// @match        https://www.pixiv.net/jump.php*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=pixiv.net
// @grant        none
// ==/UserScript==

(function() {
   const Link = document.links[0].href;
   window.location.href = Link;
})();
