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

$$('.confirm-title-ok-cancel').on('click', function () {
    myApp.confirm('Are you sure?', 'Custom Title');
});

$$('.ac-3').on('click', function () {
    var buttons1 = [
        {
            text: 'Button1',
            bold: true
        },
        {
            text: 'Button2',
        }
    ];
    var buttons2 = [
        {
            text: 'Cancel',
            color: 'red'
        }
    ];
    var groups = [buttons1, buttons2];
    myApp.actions(groups);
});

$$('.notification-default').on('click', function () {
    myApp.addNotification({
        title: 'Example',
        message: 'This is a simple notification message with title and message'
    });
});

var mainView = myApp.addView('.view-main', {
    dynamicNavbar: true
});

var myPhotoBrowserStandalone = myApp.photoBrowser({
    photos : [
        'img/terra.jpg',
        'img/terra.jpg',
        'img/terra.jpg'
    ]
});

$$('.pb-standalone').on('click', function () {
    myPhotoBrowserStandalone.open();
});

var conversationStarted = false;

// Init Messages
var myMessages = myApp.messages('.messages', {
    autoLayout:true
});

// Init Messagebar
var myMessagebar = myApp.messagebar('.messagebar');

// Handle message
$$('.messagebar .link').on('click', function () {
    // Message text
    var messageText = myMessagebar.value().trim();
    // Exit if empy message
    if (messageText.length === 0) return;

    // Empty messagebar
    myMessagebar.clear()

    // Random message type
    var messageType = (['sent', 'received'])[Math.round(Math.random())];

    // Avatar and name for received message
    var avatar, name;
    if(messageType === 'received') {
        avatar = 'http://lorempixel.com/output/people-q-c-100-100-9.jpg';
        name = 'Kate';
    }
    // Add message
    myMessages.addMessage({
        // Message text
        text: messageText,
        // Random message type
        type: messageType,
        // Avatar and name:
        avatar: avatar,
        name: name,
        // Day
        day: !conversationStarted ? 'Today' : false,
        time: !conversationStarted ? (new Date()).getHours() + ':' + (new Date()).getMinutes() : false
    })

    // Update conversation flag
    conversationStarted = true;
});
