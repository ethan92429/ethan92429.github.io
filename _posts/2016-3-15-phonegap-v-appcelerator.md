---
layout: post
title: "Phonegap or Appcelerator"
date: 2016-03-15
---

I am building a data visualization app for water treatment plant operators in Honduras. I want to build it based on the html/css/js code that already exists so I decided to use either appcelerator or phonegap. I have no connections to either one, so here is an unbiased analysis explaining why I chose to use PhoneGap for an initial prototype.

# The Big Picture (and the TL;DR)
PhoneGap is a wrapper around the native application's web rendering class, using the Cordova[^cordova] engine, much like Rhomobile. In contrast, Appcelerator is built from the ground up to run source js code in v8 to build native UI elements/ other native features, facilitating the use of OS-specific features. In conclusion, PhoneGap has less overhead, and most likely would get a fully fledged app out the door faster, whereas Appcelerator is one step closer to a native application, ensuring an experience much closer to that of a native app.

# PhoneGap

## How PhoneGap Works
Phone gap provides a wrapper around the native webview functionality provided in both Android and iOS SDKs. That wrapper enables applications that are designed in HTML/CSS/JS to access features of the phone normally only available through the native SDK. This JS API PhoneGap provides is called the 'bridge' because it bridges native functionality with JS functionality. Examples of native calls include: toast messages, camera access, contacts acces, and other hardware access. In the API, you queue messages (API calls) to be sent over the bridge. 

"There is much more to PhoneGap than that, but the messaging from web view to native code via the bridge implementation is the key piece of technology which allows local web applications to call native code."[^appcelerator_comparison]

## Strengths
* Light - the PhoneGap application does one thing and does it well.
* Extendable - PhoneGap makes it easy to write plugins that extend the bridge API to additional functionality in your native OS
* Easily deployable - You can deploy any HTML/CSS/JS application that already exists in minutes
* Debug on your browser - because PhoneGap apps are written in HTML/CSS/JSS, you can test and debug right in your browser

## Weaknesses
The main weakness is that PhoneGaps success at delivering a native-like experience depends on the power of the OS's web-rendering engine. WebView in Android definitely comes with its challenges.[^webView_challenges]

# Appcelerator
Appcelerator takes JavaScript source code and uses the v8 engine to call native UI elements/ other features at runtime. The developer only writes code in JS and can create views in Alloy, Appcelerator's MVC framework. 

## Strengths
Appcelerator enables the creation of native applications in JS. And therefore the perks include all the abilities of a native application. As compared to PhoneGap, this means you can use native UI elements and easily access the phone's hardware (although PhoneGap does include this, to some extent). 

## Weaknesses
Appcelerator requires writing an app that works specifically with the appcelerator API, whereas PhoneGap works directly with the CSS/HTML views you design. Therefore, a PhoneGap app can be created from an existing website in minutes.

# Conclusion
We are planning to use PhoneGap to build the initial prototype of our app because we already have a website, and thus building with PhoneGap should be a straightforward porting of our current website. However, if we see that the prototype is not working as 'natively' as we'd like, or some functionality we need is not supported in webview, we will reconsider moving the application to Appcelerator or some related platform. More blog posts following our progress will come soon.

# Sources

[^appcelerator_comparison]: [Extremely detailed comparison of PhoneGap and Appcelerator](http://www.appcelerator.com/blog/2012/05/comparing-titanium-and-phonegap/)
[^webView_challenges]: [A list of common frustrations developers often have with webview](http://simonmacdonald.blogspot.com/2012/02/android-issues-all-phonegap-developers.html)
[^cordova]: [The Cordova Engine](http://cordova.apache.org/)
