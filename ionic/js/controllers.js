angular.module('starter.controllers', [])


  .controller('DashCtrl', function($scope, $ionicActionSheet, $ionicPopup, $timeout) {
    $scope.show = function() {

      // Show the action sheet
      var hideSheet = $ionicActionSheet.show({
        buttons: [
          { text: '<b>Share</b> This' },
          { text: 'Move' }
        ],
        titleText: 'Modify your album',
        cancelText: 'Cancel',
        cancel: function() {
          // add cancel code..
        },
        buttonClicked: function(index) {
          return true;
        }
      });
    };
    $scope.showPopup = function() {
      $scope.data = {};
      // An elaborate, custom popup
      var myPopup = $ionicPopup.show({
        template: '<input type="password">',
        title: 'Enter Wi-Fi Password',
        subTitle: 'Please use normal things',
        scope: $scope,
        buttons: [
          { text: 'Cancel' },
          {
            text: '<b>Save</b>',
            type: 'button-positive',
            onTap: function(e) {
              if (!$scope.data.wifi) {
                //don't allow the user to close unless he enters wifi password
                e.preventDefault();
              } else {
                return $scope.data.wifi;
              }
            }
          }
        ]
      });
      myPopup.then(function(res) {
        console.log('Tapped!', res);
      });
      $timeout(function() {
        myPopup.close(); //close the popup after 3 seconds for some reason
      }, 3000);
    };
    // A confirm dialog
    $scope.showConfirm = function() {
      var confirmPopup = $ionicPopup.confirm({
        title: 'Consume Ice Cream',
        template: 'Are you sure you want to eat this ice cream?'
      });
      confirmPopup.then(function(res) {
        if(res) {
          console.log('You are sure');
        } else {
          console.log('You are not sure');
        }
      });
    };

    // An alert dialog
    $scope.showAlert = function() {
      var alertPopup = $ionicPopup.alert({
        title: 'Don\'t eat that!',
        template: 'It might taste good'
      });
      alertPopup.then(function(res) {
        console.log('Thank you for not eating my delicious ice cream cone');
      });
    };
  })


  .controller('IntroCtrl', function($scope, $state, $ionicSlideBoxDelegate){
    $scope.startApp = function() {
      $state.go('tab.dash');
    };
    $scope.next = function() {
      $ionicSlideBoxDelegate.next();
    };
    $scope.previous = function() {
      $ionicSlideBoxDelegate.previous();
    };

    $scope.slideChanged = function(index) {
      $scope.slideIndex = index;
    };
   })

.controller('ChatCtrl', function($scope) {
    var messageOptions = [
      { content: '<p>Lorem ipsum dolor sit amet, vix tota quas elitr ad.</p>' },
      { content: '<p>Qui ei paulo eripuit, duo et ferri repudiare.</p>' },
      { content: '<p>Ea suscipit perfecto eam, omnium commune conceptam pri at.</p>' },
      { content: '<p>Noster reformidans no cum, pri enim recteque interesset id.</p>' },
      { content: '<img src="img/magic.jpg" alt=""/>' },
      { content: '<p>Id has viris tantas.</p>' },
      { content: '<p>Persecuti vituperata has no, ad eros expetendis reprimique ius.</p>' },
      { content: '<img src="https://github.com/dimatwin/dimatwin.github.io/blob/master/ionic/img/terra.jpg" alt=""/>'},
      { content: '<p>Sed dicta iisque in.</p>' },
      { content: '<p>Mutat commodo fastidii has eu, his debet melius alterum ei. Sed legere doctus numquam ex.</p>' },
      { content: '<p>Ut noster consulatu vis, vis te vocent volutpat petentium.</p>' }
    ];

    $scope.messages = messageOptions.slice(0, messageOptions.length);
})



.controller('SettingsCtrl', function($scope) {
  $scope.settings = {
    onOff: true
  };
});
