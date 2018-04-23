# anti_rwt
This is an extension written with WebExtension standard API to disable Google's `rwt` function. In fact, in Google Search, when `onmousedown` event fires on an anchor element, `rwt` function is called. It's a Javascript function that replaces link's URL with a custom Google's URL that redirects to original one.


# Tested Browsers
- Firefox (according reference browser supports it from 4 onwards)
- Chrome/Chromium (according reference browser supports it from 5 onwards)
