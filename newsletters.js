var newsletters = [
  {
    published: false,
    number: "15",
    date: '9/17/15',
    posts: [
      {
        title: '',
        body: '',
        author: '',
        twitterHandle: '',
        url: ''
      },
      {
        title: '',
        body: '',
        author: '',
        twitterHandle: '',
        url: ''
      },
      {
        title: '',
        body: '',
        author: '',
        twitterHandle: '',
        url: ''
      },
      {
        title: '',
        body: '',
        author: '',
        twitterHandle: '',
        url: ''
      },
      {
        title: '',
        body: '',
        author: '',
        twitterHandle: '',
        url: ''
      }
    ],
  },
  {
    number: "14",
    date: '9/10/15',
    posts: [
      {
        title: "State Management with Redux",
        body: "You've probably noticed a trend in the React world lately. Everyone is talking about Redux. There's a reason for this. In this post, Brandon talks about his frustrations with state management before Redux and how Redux is changing the way we think about managing our state.",
        author: "Brandon Konkle",
        twitterHandle: "bkonkle",
        url: "http://konkle.us/state-management-with-redux/",
      },
      {
        title: "Up and Running with ES6 and React in Under 5 Minutes",
        body: "This article shows how to avoid bikeshedding your environment setup and just start hacking quickly. Using hjs-webpack you can have a productive dev environment in no time flat.",
        author: "Ben Clinkinbeard",
        twitterHandle: "bclinkinbeard",
        url: "http://benclinkinbeard.com/posts/up-and-running-with-es6-and-react-in-under-5-minutes/"
      },
      {
        title: "(Video) Principles of Functional Programming in React",
        body: "Functional programming is once again making it's way into the limelight. In this talk, Jessica walks through why that is and how to better use functional programming techniques in your React codebase.",
        author: "Jessica Kerr",
        twitterHandle: "jessitron",
        url: "https://www.youtube.com/watch?v=1uRC3hmKQnM",
      },
      {
        title: "Single State Tree + Flux",
        body: "Ever thought of managing your entire application state in a single tree? Merrick has, and he loves it. In this post Merrick explains why he came to this conclusion as well as how Redux helps him accomplish this approach.",
        author: "Merrick Christensen",
        twitterHandle: "iammerrick",
        url: "http://merrickchristensen.com/articles/single-state-tree.html",
      },
      {
        title: "React Mocha Test Suite with Gulp",
        body: "React is the first JavaScript framework that Brian has enjoyed writing tests for. In this article, Brian will walk you through setting up your testing toolchain using Gulp so that you can constantly run your tests during development.",
        author: "Brian Hough",
        twitterHandle: "b_hough",
        url: "http://css-max.com/testing-react-tool-implementation/",
      },
    ],
  },
  {
    number: "13",
    date: '6/25/15',
    posts: [
      {
        title: "From JSXTransformer to Babel",
        body: "JSXTransformer is going away, so there's no better time to switch to Babel. In this very precise article, Stoyan gives you the bare minimum you need to switch over from JSXTransformer to Babel. ",
        author: "Stoyan Stefanov",
        twitterHandle: "stoyanstefanov",
        url: "http://www.phpied.com/from-jsxtransformer-to-babel/",
      },
      {
        title: "React Native Meets Async Functions",
        body: "For UIs, handling concurrency is extremely important. Apps written with React Native are no exception, but they have a terrific advantage: they are written mostly in JavaScript, whose toolbox of concurrency patterns has evolved to include closures, promises, generators, and most recently, async functions. In this article, James talks about how to utilize Async functions in your React Native application.",
        author: "James Ide",
        twitterHandle: "JI",
        url: "https://medium.com/the-exponent-log/react-native-meets-async-functions-3e6f81111173",
      },
      {
        title: "Unit Testing React Components Without a DOM",
        body: "When unit testing React components the common approach has been to render them into a DOM and run some assertions against them with the help of the React TestUtils. This has changed in 0.13 where an early implementation of shallow rendering is now ready to use. In this article, Simon talks through how to utilize shallow rendering for more efficient testing.",
        author: "Simon Smith",
        twitterHandle: "blinkdesign",
        url: "http://simonsmith.io/unit-testing-react-components-without-a-dom/",
      },
      {
        title: "Interoperable CSS",
        body: "CSS is inherently broken. In this article, Glen walks through the history and shortcomings of CSS and then introduces ICSS or Interoperable CSS to overcome these shortcomings. ",
        author: "Glen Maddern",
        twitterHandle: "glenmaddern",
        url: "http://glenmaddern.com/articles/interoperable-css",
      },
      {
        title: "Coding with React like a Game Developer",
        body: "As a JavaScript developer you’re much like a game developer. You’re in a constricted environment, that has its quirks. But with ES6 it feels like we can finally clean up some JavaScript weirdness and even smarter patterns, that fully embraces the new standard. In this article, Phil walks through building React apps with ES6 and Babel.",
        author: "Phil Plückthun",
        twitterHandle: "PhilPlckthun",
        url: "https://medium.com/@PhilPlckthun/coding-with-react-like-a-game-developer-e39ffaed1643",
      },
    ]
  },
  {
    number: "12",
    date: '6/5/15',
    posts: [
      {
        title: "The Evolution of Flux Frameworks",
        body: "In this post, Dan walks through the history of creating apps with Flux and how there are some low hanging fruit to make the process better. He goes on to explain how Flux implementations are evolving past what the original implementation was. If you're using Flux and want some ideas to improve the process, check out this post.",
        author: "Dan Abramov",
        twitterHandle: "dan_abramov",
        url: "https://medium.com/@dan_abramov/the-evolution-of-flux-frameworks-6c16ad26bb31",
      },
      {
        title: "Adding Authentication to your React Flux App",
        body: "Curious how to add authentication to your Flux app? In this post Martin walks through the process while also including some nice visuals to help you understand the process.",
        author: "Gonto",
        twitterHandle: "Adding Authentication to your React Flux App",
        url: "https://auth0.com/blog/2015/04/09/adding-authentication-to-your-react-flux-app/",
      },
      {
        title: "The End of Global CSS",
        body: "If you've ever used CSS, you know it can be pretty brutal on the global namespace. In this post Mark walks through using Webpack to make your CSS more maintainable and to finally fix CSS (or at least improve it).",
        author: "Mark Dalgleish",
        twitterHandle: "markdalgleish",
        url: "https://medium.com/seek-ui-engineering/the-end-of-global-css-90d2a4a06284",
      },
      {
        title: "JSX Looks like an Abomination, but it's Good for You",
        body: "If you're just starting out, face it, you probably don't like JSX. If you've been doing React for more than a week, you love JSX. In this article Eric describes why JSX is 'like a healthy vegetable that tastes like decadent chocolate. You feel guilty, but it's good for you'.",
        author: "Eric Elliott",
        twitterHandle: "_ericelliott",
        url: "https://medium.com/javascript-scene/jsx-looks-like-an-abomination-1c1ec351a918",
      },
      {
        title: "How to Test React Components",
        body: "How to test your React components is a very common question amongst beginners and intermediate React developers alike. In this post, Nicolas walks through using Karma and Webpack to implement testing into your workflow.",
        author: "https://twitter.com/necolas",
        twitterHandle: "necolas",
        url: "http://nicolasgallagher.com/how-to-test-react-components-karma-webpack/",
      },
    ]
  },
  {
    number: "11",
    date: '5/7/15',
    posts: [
      {
        title: "Smart and Dumb Components",
        body: "In this blog post Dan walks through how he divides his React Components into two categories, smart and dumb components. Doing this yields many benefits, separation of concerns, reusability, and more. Check out this article if you'd like a new approach to reasoning about your React components.",
        author: "Dan Abramov",
        twitterHandle: "dan_abramov",
        url: "https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0",
      },
      {
        title: "Isomorphic React in Real Life",
        body: "Interested in building an Isomorphic app with React.js? Check out this tutorial by Jonas Ohlsson. In this post Jonas walks through what he learned building an Isomorphic React app at work.",
        author: "Jonas Ohlsson",
        twitterHandle: "pocketjoso",
        url: "http://jonassebastianohlsson.com/blog/2015/03/24/isomorphic-react-in-real-life/",
      },
      {
        title: "Refactoring React Components to ES6 Classes",
        body: "If you're still using React.createClass to create your React components, check out this blog post by Kris Jordan. In this post Kris walks through everything you need to know in order to convert your components over to ES6 classes. ",
        author: "Kris Jordan",
        twitterHandle: "KrisJordan",
        url: "http://www.newmediacampaigns.com/blog/refactoring-react-components-to-es6-classes",
      },
      {
        title: "Hello, React.js",
        body: "In this article, Chen walks through the pitfalls he encountered when he dove into React. Stores are not models, don't overuse setState, and keep it simple, among a few other things. ",
        author: "Chen Zihui",
        twitterHandle: "jetupper",
        url: "https://medium.com/@jetupper/hello-react-js-b87c63526e3a",
      },
      {
        title: "Architecting React.js Apps with Flux",
        body: "Flux still have you a little flustered? Check out this article by Tyler McGinnis. In the third part of a six part series on React.js, Tyler breaks down Flux in a very composable manner. If you're new to Flux, start here.",
        author: "Tyler McGinnis",
        twitterHandle: "tylermcginnis33",
        url: "http://tylermcginnis.com/reactjs-tutorial-pt-3-architecting-react-js-apps-with-flux/",
      },
    ]
  },
  {
    number: "10",
    date: '2/26/15',
    posts: [
      {
        title: "Introduction to Facebook's Flux Architecture",
        body: "When you're initially starting out with Flux, it can be a bit overwhelming. In this article Ryan walks through the Flux architecture comparing it to the human anatomy. Sounds weird, but it's actually really helpful for seeing how all the pieces of Flux fit together. ",
        author: "Ryan Clark",
        twitterHandle: "rynclark",
        url: "http://ryanclark.me/getting-started-with-flux/",
      },
      {
        title: "React vs React",
        body: "In this article Warren expands on what it means when React developers talk about how the Virtual DOM is just an implementation detail and what he believes the future of technologies built in React will look like.",
        author: "Warren Seine",
        twitterHandle: "warrenseine",
        url: "https://medium.com/@warrenseine/react-vs-react-5e7db73f2aee",
      },
      {
        title: "React Tips and Best Practices",
        body: "Whether you're brand new to React or you've been pushing React into production for months now, this article will be of value to you. In this post Alexander will walk you through some good and bad practices in React and how to improve the React code that you write. ",
        author: "Alexander Early",
        twitterHandle: "aearly",
        url: "http://aeflash.com/2015-02/react-tips-and-best-practices.html",
      },
      {
        title: "React.js in Real Life at Codecademy",
        body: "In this article, Bonnie walks through some of the building blocks of React and then shows how Codecademy has leveraged React in order to create a better experience for their customers. ",
        author: "Bonnie Eisenman",
        twitterHandle: "brindelle",
        url: "http://www.infoq.com/articles/reactjs-codecademy?utm_source=hacker%20news&utm_medium=link&utm_campaign=react_js_article",
      },
      {
        title: "Removing UI Complexity, or Why React is Awseome",
        body: "This article is an oldie but a goodie. In this article Jimmy walks through building a small implementation of React to demonstrate why the principles/features of React are so great for developing applications.",
        author: "James Long",
        twitterHandle: "jlongster",
        url: "http://jlongster.com/Removing-User-Interface-Complexity,-or-Why-React-is-Awesome",
      },
    ]
  },
  {
    number: "9",
    date: '2/19/15',
    posts: [
      {
        title: "The Case for Flux",
        body: "If Dan writes something, you should probably take some time to read it. He produces some really good material. In this article Dan talks about when you should, and shouldn't use Flux in your projects and expounds on the dangers of dogmas in upcoming technologies.",
        author: "Dan Abramov",
        twitterHandle: "dan_abramov",
        url: "https://medium.com/@dan_abramov/the-case-for-flux-379b7d1982c6",
      },
      {
        title: "Reapp",
        body: "This one slipped by a lot of people with the announcement of React Native. Reapp lets you build hybrid mobile apps with React, Webpack, and ES6 - today. ",
        author: "Nate Wienert",
        twitterHandle: "reapp",
        url: "http://reapp.io/",
      },
      {
        title: "React/Flux from an Angular Perspective",
        body: "If you're coming to React from an Angular background, you should check out this article. Micah walks through his thoughts on making the transition to React. ",
        author: "Micah Fulton",
        twitterHandle: "N/A",
        url: "http://blog.celerity.com/react/flux-from-an-angularjs-perspective",
      },
      {
        title: "Getting Started with React.js",
        body: "If you're new to React this is also a great article to check out. Ryan walks through everything from JSX and the virtual DOM to state and props + more.",
        author: "Ryan Clark",
        twitterHandle: "rynclark",
        url: "http://ryanclark.me/getting-started-with-react/",
      },
    ]
  },
  {
    number: "8",
    date: '2/12/14',
    posts: [
      {
        title: "60 FPS on the Mobile Web",
        body: "Flipboard has been around for a while now and they've always been mobile first. Read through this article as Michael describes React Canvas, the ability for React components to render to <canvas> rather than the DOM and how they're using it at Flipboard to bring amazing UI to the mobile web. ",
        author: "Michael Johnston",
        twitterHandle: "bapjuseyo",
        url: "http://engineering.flipboard.com/2015/02/mobile-web/",
      },
      {
        title: "What's so Great about React.js?",
        body: "If you haven't noticed lately, React is taking off. If you're new to React, check out this Reddit thread which has some great comments as to why developers are loving React.",
        author: "N/A",
        twitterHandle: "N/A",
        url: "http://www.reddit.com/r/javascript/comments/2uvz0x/whats_so_great_about_reactjs/",
      },
      {
        title: "First Impressions using React Native",
        body: "Still curious about React Native? In this article James walks through more details about React Native including what's happening under the hood as well as building an OpenGL App with it.",
        author: "James Long",
        twitterHandle: "jlongster",
        url: "http://jlongster.com/First-Impressions-using-React-Native",
      },
      {
        title: "Rebuilding Hipchat with React.js",
        body: "Another company adopts React.js. In this article Manalang walks you through why Hipchat went with React.js and Flux in order to rebuild its web app and why they loved that decision.",
        author: "Rich Manalang",
        twitterHandle: "rmanalan",
        url: "https://developer.atlassian.com/blog/2015/02/rebuilding-hipchat-with-react/",
      },
      {
        title: "React File Structure",
        body: "One thing that always seems to be changing is the right way to structure your files. This is just a simple Gist that Ryan Florence put together about what works for him when it comes to structuring his React apps.",
        author: "Ryan Florence",
        twitterHandle: "ryanflorence",
        url: "https://gist.github.com/ryanflorence/110d4538bf98694538de",
      },
    ]
  },
  {
    number: "7",
    date: '2/5/15',
    posts: [
      {
        title: "React Hot Loader",
        body: "Do you use Webpack and want to increase your productivity while building apps in React? Check out React Hot Loader, a plugin for Webpack that allows instantaneous live refresh without losing state while editing your React components. ",
        author: "Dan Abramov",
        twitterHandle: "dan_abramov",
        url: "http://gaearon.github.io/react-hot-loader/getstarted/",
      },
      {
        title: "How Netflix Plans to Enhance your Television Experience",
        body: "Did you know Netflix is rebuilding ALL  (iOS, TV, and Web) of their UI in React? Watch as Jafar goes into the reasoning behind this decision and explains how Netflix is going 'beyond the DOM'.",
        author: "Jafar Husain",
        twitterHandle: "jhusain",
        url: "https://www.youtube.com/watch?v=eNC0mRYGWgc&index=14&list=PLb0IAmt7-GS1cbw4qonlQztYV1TAW0sCr",
      },
      {
        title: "React.js Cheatsheet",
        body: "Getting started with React? Check out this React.js cheatsheet in order to have a quick reference guide for the React API.",
        author: "Rico Sta. Cruz",
        twitterHandle: "rstacruz",
        url: "http://ricostacruz.com/cheatsheets/react.html",
      },
      {
        title: "Facebook just taught us all how to build websites",
        body: "Sometimes in software development we take great leaps forward as an industry. Memcached, MapReduce, ClientSide templating, and Angular.js are all examples of that. Check out this article to learn why Eric believes that the combination of React, Relay, and GraphQL is once again moving the industry forward.",
        author: "Eric Florenzano",
        twitterHandle: "ericflo",
        url: "https://blog.gyrosco.pe/facebook-just-taught-us-all-how-to-build-websites-51f1e7e996f2",
      },
      {
        title: "Immutable Data and React",
        body: "You've probably been hearing a lot about immutable data lately. Watch this talk by Lee which some are claiming as 'the best talk on immutability' they've ever heard. Lee dives into using immutable data with React and why the combination makes a perfect pair. ",
        author: "Lee Byron",
        twitterHandle: "leeb",
        url: "https://www.youtube.com/watch?v=I7IdS-PbEgI&index=13&list=PLb0IAmt7-GS1cbw4qonlQztYV1TAW0sCr",
      },
    ]
  },
  {
    number: "6",
    date: '1/30/15',
    posts: [
      {
        title: "React.js Conf 2015 Keynote - React Native",
        body: "The talk that started it all. Watch as Tom walks through the history of React and how it's gotten to where it is today. He then goes on to introduce what has the whole industry talking, React Native. A way to build native iOS and Android applications in React.",
        author: "Tom Occhino",
        twitterHandle: "tomocchino",
        url: "https://www.youtube.com/watch?v=KVZ-P-ZI6W4&index=1&list=PLb0IAmt7-GS1cbw4qonlQztYV1TAW0sCr",
      },
      {
        title: "Keynote 2 - A Deep Dive into React Native",
        body: "Tom introduced React Native in the keynote on Wednesday and we all had to wait for this talk by Christopher on Thursday to dive deeper into React Native. Watch as Christopher goes more in depth with React Native and walks through a movie iOS app built with React Native. There's reason every React developer has been really excited these past few days. ",
        author: "Christopher Chedeau",
        twitterHandle: "vjeux",
        url: "https://www.youtube.com/watch?v=7rDsRXj9-cU&index=2&list=PLb0IAmt7-GS1cbw4qonlQztYV1TAW0sCr",
      },
      {
        title: "Tweak your Page in Real Time",
        body: "In this talk, Brenton will teach you how to bring instant-feedback magic into your favorite editor, where the key-bindings are familiar and your favorite transpilers are at your aid. Make changes to your JSX+JS Harmony+Sass-powered app and watch them cascade across every device on your desk in real-time, with no reloading!",
        author: "Brenton Simpson",
        twitterHandle: "appsforartists",
        url: "https://www.youtube.com/watch?v=yaymfLj5tjA&list=PLb0IAmt7-GS1cbw4qonlQztYV1TAW0sCr&index=3",
      },
      {
        title: "Unlocking the structure of your React applications with the AST",
        body: "Lisp programmers have understood the power of the concept of 'code as data' for decades. Having a structured representation of your code allows for an untold number of new applications that go far beyond what can be achieved by treating it as a lifeless stream of characters. Esprima, a parser for javascript pushes your development very far in that direction by allowing you access to an AST (abstract syntax tree) representation of your code, that coupled with the strong conventions and API of React allow for some pretty amazing applications that Gurdas demonstrate how to implement.",
        author: "Gurdas Nijor",
        twitterHandle: "gnijor",
        url: "https://www.youtube.com/watch?v=OZGgVxFxSIs&list=PLb0IAmt7-GS1cbw4qonlQztYV1TAW0sCr&index=4",
      },
      {
        title: "Data Fetching for React Applications at Facebook",
        body: "Daniel Schafer and Jing Chen describe the approach Facebook uses to make data fetching simple for developers, even as a project grows to include dozens of developers and the application becomes as complex as Facebook's news feed.",
        author: "Jing Chen",
        twitterHandle: "jingc",
        url: "https://www.youtube.com/watch?v=9sc8Pyc51uU&list=PLb0IAmt7-GS1cbw4qonlQztYV1TAW0sCr&index=5",
      },
    ]
  },
  {
    number: "5",
    date: '1/22/15',
    posts: [
      {
        title: "A Comprehensive Guide to Building Apps with React.js",
        body: "React isn’t difficult to learn; putting all of the pieces together to build a full web application in React is. Throughout this series Tyler will walk you through how to build applications in React with Gulp/Browserify, Flux, React-Router, and Firebase. In this first post Tyler gives you a very in depth intro to React covering everything from JSX to State and Props to the component life cycle.",
        author: "Tyler McGinnis",
        twitterHandle: "tylermcginnis33",
        url: "http://tylermcginnis.com/reactjs-tutorial-a-comprehensive-guide-to-building-apps-with-react/",
      },
      {
        title: "You're Missing the Point of React",
        body: "Was the virtual DOM so revolutionary that we're overlooking the best parts of React? It's an interesting question and in this article Dan talks about what he thinks are really the best parts of React, even though they're not typically in the 'React is good because of X' conversation. ",
        author: "Dan Abramov",
        twitterHandle: "dan_abramov",
        url: "https://medium.com/@dan_abramov/youre-missing-the-point-of-react-a20e34a51e1a",
      },
      {
        title: "Marty.js",
        body: "Are you still experimenting with your React architecture? Check out Marty.js, a Javascript library for state management in React applications. Marty is an implementation of the Flux architecture. It defines a set of rules about how to manage your applications state.",
        author: "James Hollingworth",
        twitterHandle: "jhollingworth",
        url: "http://martyjs.org/",
      },
      {
        title: "Griddle",
        body: "If you're in need of a grid component in React, check out Griddle. Out of the box Griddle is configurable, functional, and fast being powered by React's Virtual DOM.",
        author: "Ryan Lanciaux",
        twitterHandle: "ryanlanciaux",
        url: "http://griddlegriddle.github.io/Griddle/",
      },
    ]
  },
  {
    number: "4",
    date: '1/8/15',
    posts: [
      {
        title: "The React Quick Start Guide",
        body: "Are you new to React? In this article Jack does a great job of breaking down the fundamental building blocks of React from components, to props, state, and everything in between. If you're just getting started with React, this is should be one of the first posts you read. ",
        author: "Jack Callister",
        twitterHandle: "jarsbe",
        url: "http://www.jackcallister.com/2015/01/05/the-react-quick-start-guide.html",
      },
      {
        title: "React Week",
        body: "If you're looking to accelerate your React knowledge, check out React Week - the first week long workshop focused on all things React. They'll cover React, Flux, React-Router, Webpack, and Firebase by one of the industry's best React developers Ryan Florence. Tickets go on sale January 23rd but you can register to get updates on ReactWeek.com right now.",
        author: "React Week",
        twitterHandle: "reactweek",
        url: "http://reactweek.com",
      },
      {
        title: "The Flux Pattern without the Globals",
        body: "Since Flux is a pattern, developers have been able to create various implementations of Flux to better fit their needs. Here, Brian creates his own implementation for Flux by creating instances for the Flux actors instead of using singletons.",
        author: "Brian Di Palma",
        twitterHandle: "BrianDiPalma1",
        url: "http://briandipalma.github.io/flux-for-components/",
      },
      {
        title: "React-Grid-Layout",
        body: "react-grid-layout is a draggable and resizable grid layout with responsive breakpoints, for React. It supports breakpoints which can be provided by the user or autogenerated. If you're looking for a draggable grid layout for your next React project, check out this repo.",
        author: "Samuel Reed",
        twitterHandle: "strml_",
        url: "https://github.com/STRML/react-grid-layout",
      },
    ]
  },
  {
    number: "3",
    date: '1/1/15',
    posts: [
      {
        title: "Creating react-styleguide",
        body: "One thing that more web developers should do when building a website is create a style guide -- even if it's only internal. In this post, Joseph walks through his reasoning for creating react-styleguide, a flexible react component for creating style guides for your React projects.",
        author: "Joseph Furlott",
        twitterHandle: "jmfurlott",
        url: "http://jmfurlott.com/creating-react-styleguide/",
      },
      {
        title: "React + Angular DI",
        body: "A few weeks ago we posted an article from Merrick as he ventured into making his React code more testable. We're excited to announce he finally nailed it. In this post Merrick walks through how to use Angular's di.js with React in order to create testable code without module system level mocking.",
        author: "Merrick Christensen",
        twitterHandle: "iammerrick",
        url: "http://merrickchristensen.com/articles/react-angular-di.html",
      },
      {
        title: "Flux in TypeScript",
        body: "Have you ever been curious how to implement TypeScript with Flux? Well now you know.",
        author: "Mike Wilcox",
        twitterHandle: "subr0utine",
        url: "https://github.com/mjw56/ruscello",
      },
      {
        title: "Managing View State with React",
        body: "One of the biggest and most common problems in front-end web development is state management. A developer is constantly focused on keeping the state object in sync with its view and the DOM representation. In this article Leonardo walks through how to use React to solve this problem.",
        author: "Leonardo Andres Garcias Crespo",
        twitterHandle: "N/A",
        url: "http://www.toptal.com/react/managing-view-state-with-react",
      },
      {
        title: "Hacker News Front Page in React",
        body: "One of the best ways to learn a new technology is by building something with it. In this repo, Matthew walks through how to re-create the Hacker News Front Page using React.",
        author: "Matthew King",
        twitterHandle: "N/A",
        url: "https://github.com/mking/react-hn",
      },
    ]
  },
  {
    number: "2",
    date: '12/18/14',
    posts: [
      {
        title: "Flux For Stupid People",
        body: "Flux can be daunting for those first starting out with it. Andrew does a great job of teaching the fundamentals of flux in layman's terms. If you're looking to learn Flux, this article should be your first stop.",
        author: "Andrew Ray",
        twitterHandle: "andrewray",
        url: "http://blog.andrewray.me/flux-for-stupid-people/",
      },
      {
        title: "Building a Test Suite in React",
        body: "In this article Jack walks through using Jest to set up a test suite in order to test his React components.",
        author: "Jack Callister",
        twitterHandle: "jarsbe",
        url: "http://www.jackcallister.com/2014/12/01/building-a-test-suite-in-react-js.html",
      },
      {
        title: "'Yo' built with React",
        body: "When you first start learning React, putting all the pieces together can be difficult. Here David walks through how to use React, Firebase, and the Flux architecture to recreate the popular app 'Yo'.",
        author: "David Chizzle",
        twitterHandle: "davidchizzle",
        url: "http://davidandsuzi.com/yo-in-flux/",
      },
    ]
  },
  {
    number: "1",
    date: '12/11/14',
    posts: [
      {
        title: "ReactJS For Stupid People",
        body: "Whenever you start learning a new language/framework/library you go through a phase of 'Am I stupid, or is this just hard?'. In this post Andrew addresses some fundamental aspects of React that he wish someone had told him when he first started with React.",
        author: "Andrew Ray",
        twitterHandle: "andrewray",
        url: "http://blog.andrewray.me/reactjs-for-stupid-people/",
      },
      {
        title: "Build with React",
        body: "If you're just starting out with React, Build with React is a fantastic place to start. Paul has built a list of tutorials ranging from JSX and Events to Optimization and (eventually) diving into React source code.",
        author: "N/A",
        twitterHandle: "buildwithreact",
        url: "http://buildwithreact.com/",
      },
      {
        title: "React Dependency Injection",
        body: "Read along as Merrick experiments with making React more testable by doing away with the normal singleton approach pattern of creating React applications.",
        author: "Merrick Christensen",
        twitterHandle: "iammerrick",
        url: "http://merrickchristensen.com/articles/react-dependency-injection.html",
      },
      {
        title: "ReactJS In Java Hello World",
        body: "Arian walks through his approach for leveraging Java's embedded JavaScript run time to be able to run React inside his Java Application. ",
        author: "Arian Stolwijk",
        twitterHandle: "astolwijk",
        url: "http://aryweb.nl/2014/12/09/ReactJS-in-Java-Hello-World/",
      },
    ]
  },
];
