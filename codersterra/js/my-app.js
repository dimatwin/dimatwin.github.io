// Initialize your app
var myApp = new Framework7({swipePanel:'left'});

// Export selectors engine
var $$ = Dom7;

// Add views
var view1 = myApp.addView('#view-1');
var view2 = myApp.addView('#view-2', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});
var view3 = myApp.addView('#view-3');
var view4 = myApp.addView('#view-4');

var mainView = myApp.addView('.view-main');

var welcomescreen_slides = [
    {
        id: 'slide0',
        picture: '<div class="tutorialicon">♥</div>',
        text: 'Welcome to this tutorial. In the next steps we will guide you through a manual that will teach you how to use this app.'
    },
    {
        id: 'slide1',
        picture: '<div class="tutorialicon">✲</div>',
        text: 'This is slide 2'
    },
    {
        id: 'slide2',
        picture: '<div class="tutorialicon">♫</div>',
        text: 'This is slide 3'
    },
    {
        id: 'slide3',
        picture: '<div class="tutorialicon">☆</div>',
        text: 'Thanks for reading! Enjoy this app.<br><br><a id="tutorial-close-btn" class="tutorial-close-btn" href="">End Tutorial</a>'
    }
];
var options = {
    'bgcolor': '#0da6ec',
    'fontcolor': '#fff'
};
var welcomescreen = myApp.welcomescreen(welcomescreen_slides, options);

$$(document).on('click', '.tutorial-close-btn', function () {
    welcomescreen.close();
});
