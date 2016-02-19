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
        Meteor.subscribe 'Notifications'
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
        Meteor.subscribe 'userData'
        Meteor.subscribe 'ProfilePictures'
      ]
    data: ->
      itemList: items.find({_id: this.params._id}).fetch();
    fastRender: true
  @route "MyNotifications",
    path: "/MyNotifications"
    waitOn: ->
      [
        Meteor.subscribe 'userData'
        Meteor.subscribe 'ProfilePictures'
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
  @route "showNotification",
    path: "/showNotification/:_id"
    waitOn: ->
      [
        Meteor.subscribe 'userData'
        Meteor.subscribe 'Notifications'
      ]
    data: ->
      Notifications.findOne({_id: this.params._id});
    fastRender: true