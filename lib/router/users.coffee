Router.map ->
  @route "profile",
    path: "/profile"
    waitOn: ->
      Meteor.subscribe 'ProfilePictures'

  @route "account",
    path: "/account"

  @route "setUserName",
    path: "/setUserName"
    onBeforeAction:
      [
        ()->
          if not Config.username or (Meteor.userId() and Meteor.user().username)
            @redirect '/'
          @next()
      ]

  @route 'signOut',
    path: '/sign-out'
    onBeforeAction:
      [
        ()->
          Meteor.logout ->
          @redirect '/'
          @next()
      ]