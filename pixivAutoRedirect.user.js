// ==UserScript==
// @name         pixivAutoRedirect
// @version      1.1.1
// @homepageURL https://github.com/soysource651/pixivAutoRedirect
// @updateURL   https://github.com/soysource651/pixivAutoRedirect/raw/main/pixivAutoRedirect.user.js
// @downloadURL https://github.com/soysource651/pixivAutoRedirect/raw/main/pixivAutoRedirect.user.js
// @description  test
// @author       soysource651
// @match        https://www.pixiv.net/jump.php*
// @match        https://nijie.info/jump.php*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=pixiv.net
// @grant        none
// ==/UserScript==

(function() {
   var URL = window.location.href;

   if ( URL.indexOf('https://www.pixiv.net/jump.php')===0) {
       const Link = document.querySelector('div').querySelector('a').getAttribute('href');
       window.location.href = Link;
   }
   else if (URL.indexOf('https://nijie.info/jump.php')===0) {
       const Link = document.querySelector("p.bold.size24").querySelector('a').getAttribute('href');
       window.location.href = Link;
   }
})();
