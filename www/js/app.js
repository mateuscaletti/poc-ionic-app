var AppModule=angular.module("app",["ionic","app.controllers","app.services","app.models"]);AppModule.config(function(t,l){t.state("app",{url:"/app","abstract":!0,templateUrl:"templates/menu.html",controller:"AppCtrl"}).state("app.search",{url:"/search",views:{menuContent:{templateUrl:"templates/search.html"}}}).state("app.browse",{url:"/browse",views:{menuContent:{templateUrl:"templates/browse.html"}}}).state("app.playlists",{url:"/playlists",views:{menuContent:{templateUrl:"templates/playlists.html",controller:"PlaylistsCtrl"}}}).state("app.single",{url:"/playlists/:playlistId",views:{menuContent:{templateUrl:"templates/playlist.html",controller:"PlaylistCtrl"}}}),l.otherwise("/app/playlists")}),AppModule.run(function(t){t.ready(function(){window.cordova&&window.cordova.plugins.Keyboard&&(cordova.plugins.Keyboard.hideKeyboardAccessoryBar(!0),cordova.plugins.Keyboard.disableScroll(!0)),window.StatusBar&&StatusBar.styleDefault()})});