/*jslint browser: true, vars: true, white: true, maxerr: 50, indent: 4 */
"use strict";

(function (opera)
{
    var background = opera.extension.bgProcess;
    var googlePlusOneButton = background.googlePlusOneButton;

    window.addEventListener("DOMContentLoaded", function ()
    {
        var tabUrl = googlePlusOneButton.getTabUrl();

        if (typeof tabUrl !== "string")
        {
            return;
        }

        document.getElementById("plusOne").innerHTML = "<g:plusone href=\"" + tabUrl + "\" size=\"tall\"></g:plusone>";
        gapi.plusone.go();
    }, false);
}(window.opera));