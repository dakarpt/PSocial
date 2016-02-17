PostImages = ->
  Meteor.subscribe 'attachments'

getFavorites = ->
#  Meteor.subscribe 'Favorites'
#  Meteor.subscribe 'Processos'
  Meteor.subscribe 'ProfilePictures'

Router.map ->
  @route "home",
    path: "/"
#    waitOn: ->
#      [
#        Meteor.subscribe 'Processos'
#        Meteor.subscribe 'LogMessages'
#      ]
#    fastRender: true
  @route "createItem",
    path: "/createItem"
    waitOn: ->
      [
        Meteor.subscribe 'items'
      ]
#    fastRender: true
  @route "listItems",
    path: "/listItems"
    waitOn: ->
      [
        Meteor.subscribe 'items'
        Meteor.subscribe 'attachments'
        Meteor.subscribe 'userData'
        Meteor.subscribe 'ProfilePictures'
      ]
    data: ->
      itemList: items.find().fetch()
    fastRender: true
  @route "listItem",
    path: "/listItem/:_id"
    waitOn: ->
      [
        Meteor.subscribe 'items'
        Meteor.subscribe 'attachments'
        Meteor.subscribe 'ProfilePictures'
      ]
    data: ->
      items.findOne({_id: this.params._id});
    fastRender: true
  @route "dashboard",
    path: "/dashboard"
    waitOn: ->
      [
#        T9n.setLanguage(Session.get("language") || "pt")
#        T9n.setLanguage("pt")
        PostImages
        subs.subscribe 'posts'
        subs.subscribe 'comments'
        subs.subscribe 'userData'
        subs.subscribe 'favorites'
        getFavorites
      ]
    data: ->
      posts: Posts.find({}, {sort: {createdAt: -1}}).fetch()
  #  @route "report",
  #    path: "/report"
  #    waitOn: ->
  #      [
  #        getFavorites
  #        subs.subscribe 'favorites'
  #        subs.subscribe 'Processos'
  #        subs.subscribe 'LogMessages'
  #        subs.subscribe 'Instalacoes'
  #      ]
  #  @route "processos",
  #    path: "/processos"
  #    waitOn: ->
  #      [
  #        Meteor.subscribe 'ProfilePictures'
  #        subs.subscribe 'favorites'
  #        subs.subscribe 'Processos'
  #        subs.subscribe 'LogMessages'
  #      ]
  #  @route "graficos",
  #    path: "/graficos"
  #    waitOn: ->
  #      [
  #        Meteor.subscribe 'Instalacoes'
  #        subs.subscribe 'favorites'
  #        subs.subscribe 'Processos'
  #        subs.subscribe 'LogMessages'
  #      ]
  @route "MyNotifications",
    path: "/MyNotifications"
    waitOn: ->
      [
#        Meteor.subscribe 'Notifications'
        Meteor.subscribe 'userData'
        Meteor.subscribe 'Notifications'
      ]
#    fastRender: true
  @route "createNotification",
    path: "/createNotification"
    waitOn: ->
      [
        Meteor.subscribe 'Notifications'
        Meteor.subscribe 'userData'
      ]
#    fastRender: true
  @route "showNotification",
    path: "/showNotification/:_id"
    waitOn: ->
      [
        Meteor.subscribe 'userData'
        Meteor.subscribe 'Notifications'
      ]
    data: ->
      Notifications.findOne({_id: this.params._id});
#    fastRender: true
  @route "editNotification",
    path: "/editNotification/:_id"
    waitOn: ->
      [
        Meteor.subscribe 'userData'
        Meteor.subscribe 'Notifications'
      ]
    data: ->
      Notifications.findOne({_id: this.params._id});
#    fastRender: true

#  @route "chat",
#    path: "/chat"
#    waitOn: ->
#      [
#        subs.subscribe 'userData'
#        subs.subscribe 'messages'
#      ]