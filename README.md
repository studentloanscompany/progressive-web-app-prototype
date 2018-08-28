# Next.js Spike

## Introduction

The current industry standard for designing for mobile can be loosely summarised by the following checklist, as prescribed by Google's "Progressive Web Application" (PWA) checklist (https://developers.google.com/web/progressive-web-apps/checklist).

While all the points are important for a final product the ones being focussed in on with this spike are:

1. Pages are responsive on tablets and mobile devices
2. All app URLs load while offline
3. Metadata provided for Add to Home screen
4. First load fast even on 3G
5. Site works cross-browser
6. Page transitions don't feel like they block on the network
7. Each page has a URL
8. Contains some content when JavaScript is not available

Achieving the above (in addition to using HTTPS) will enable a user to add the application to their device. At this point the application will function in much the same way, if not identical, to a native application.  You can see an example of this in action from Twitter - https://lite.twitter.com/content/lite-twitter/en.html

This also must coincide with the GDS standard of ensuring that the application works without JavaScript enabled. This is in part covered by point 8 above: however, GDS standards state that all basic functionality should work when JavaScript is unavailable, where JavaScript should only be used to enhance the user's experience.

This was tested using google's lighthouse plugin.  This plugin is built into the latest version of chrome and can be accessed from the audits tab (press f12 and navigate to the audit tab)

## How to run

### prequisites

* Node.js is installed on your machine (built using 10.8.0 but earlier versions may also work)

### Steps
1. Open in terminal
2. run "npm install"
3. run "npm run build"
4. run "npm run dev"
5. navigate to http://localhost:3000/home

## Technology decisions

In effort to follow current industry trends, React.js was placed at the centre of this application.

### Next.js

*"Next.js is a lightweight framework for static and server‑rendered applications. https://nextjs.org" - their github page*

This is likely the most popular solution currently available to perform Server Side Rendering (SSR) for React.js. This enables what would otherwise be a JavaScript dependent application to remain functional even in the absence of JavaScript running on the browser - for example when a user disables JavaScript.

### next-offline

*"make your Next.js application work offline using service workers via Google's workbox" - https://github.com/hanford/next-offline*

A node module to provide offline functionality for next.js applications.  This is achieved by registering a Service Worker for the browser to cache content.

 *"A service worker is a script that your browser runs in the background, separate from a web page, opening the door to features that don't need a web page or user interaction. ... Before service worker, there was one other API that gave users an offline experience on the web called AppCache." - googling "what is a service worker" (https://developers.google.com/web/fundamentals/primers/service-workers/)*

 ## Outcome

### Each point in the above checklist was met.

 Server rendering React.js to provide a front-end opens up many doors over our current front-end stack.  Our front-end stack, as it currently stands in our latest applications, consists of freemarker templates layered on top of Spring Boot applications. These Spring Boot applications also pull in a separate dependency called cp-web-resources (.jar) that contains many front-end resources including scripts, stylesheets and images.
 
 Experience has proven that logic finds its way into these freemarker templates, which is inherintly difficult, if not impossible, to test using conventional test methods. While most developers have sight of these templates and can contribute to them as required, the same cannot be said for cp-web-resources which contains sophisticated JavaScript functionality that provides features such as: google analytics, live course search, and accessibility fixes.  It can be argued that this is because it doesn't live where developers typically expect it to - alongside the HTML.  Using a framework like React.js, Angular.js or Vue.js would solve this issue by keeping all functionality regarding a front-end component together.

 Using an approach like demonstrated in this spike we would be separating the concerns of the front-end which would be supported by an API to provide data as it is required.  This would enable a more componentised approach where all logic within each component can be explicitly defined and tested using Unit Tests.