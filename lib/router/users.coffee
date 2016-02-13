getPics = ->
  Meteor.subscribe 'ProfilePictures'

Router.map ->
  @route "profile",
    path: "/profile"
    waitOn: ->
      getPics

  @route "account",
    path: "/account"

  @route "setUserName",
    path: "/setUserName"
    onBeforeAction: ->
      if not Config.username or (Meteor.userId() and Meteor.user().username)
        @redirect '/dashboard'
      @next()

  @route 'signOut',
    path: '/sign-out'
    onBeforeAction: ->
      Meteor.logout ->
      @redirect '/'
      @next()