"use strict";

window.addEventListener("DOMContentLoaded", function ()
{
    var toolbarButton = null;
    var toolbarProperties =
    {
        title: "Google +1 Button",
        icon: "icons/plusOneBlueBackgroundFullSquare_25x25.png",
        popup:
        {
            href: "popup.html",
            width: 55,
            height: 70
        }
    }

    /* Add the toolbar button */
    toolbarButton = window.opera.contexts.toolbar.createItem(toolbarProperties);
    window.opera.contexts.toolbar.addItem(toolbarButton);
}, false);

function getTabUrl()
{
    try
    {
        return window.opera.extension.tabs.getFocused().url;
    }
    catch (exception)
    {
        //window.opera.postError(exception);
        return null;
    }
}