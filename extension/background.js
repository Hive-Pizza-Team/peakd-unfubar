
// TODO: clean up data (merge lists into 1 dict)

var sitesToRedirect = [
    'api.pharesim.me'
]


var requestFilterUrls = [
    '*://api.pharesim.me/*',
]



function shouldRedirect(host) {
    if (!sitesToRedirect.includes(host)) {
        return false
    }

    return true
}

function redirectListener(requestDetails) {

    var targetUrl = new URL(requestDetails.url)
    console.log(`PeakD unFUBAR: Redirecting ${targetUrl.host} to api.hive.blog...`)
    return {
        redirectUrl: `${targetUrl.protocol}//api.hive.blog${targetUrl.pathname}`
    };
}

chrome.webRequest.onBeforeRequest.addListener(
    // callback
    redirectListener,
    // filter
    {urls:requestFilterUrls, types:['main_frame','sub_frame','xmlhttprequest']},
    //  extraInfoSpec
    ['blocking']
)
