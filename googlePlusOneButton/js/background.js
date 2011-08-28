/*jslint browser: true, vars: true, white: true, maxerr: 50, indent: 4 */
"use strict";

var googlePlusOneButton = (function (opera)
{
    var button = null;
    var buttonProperties =
    {
        title: "Google +1 Button",
        icon: "images/icons/plusOneBlueBackgroundFullSquare_25x25.png",
        popup:
        {
            href: "popup.html",
            width: 55,
            height: 70
        }
    };

    var publicMembers =
    {
        getTitle: function ()
        {
            return buttonProperties.title;
        },
        getTabUrl: function ()
        {
            try
            {
                return opera.extension.tabs.getFocused().url;
            }
            catch (exception)
            {
                return (void 0);
            }
        },
        initialize: function ()
        {
            /* Add the toolbar button */
            var toolbar = opera.contexts.toolbar;
            button = toolbar.createItem(buttonProperties);
            toolbar.addItem(button);
        }
    };

    return publicMembers;
}(window.opera));

(function ()
{
    window.addEventListener("DOMContentLoaded", function ()
    {
        googlePlusOneButton.initialize();
    }, false);
}());