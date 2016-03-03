Router.map ->
  @route "home",
    path: "/"
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
        Meteor.subscribe 'favorites'
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
        Meteor.subscribe 'favorites'
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
    fastRender: true
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
  @route "smsfrontend",
    path: "/smsfrontend/:smsinfo"
    layoutTemplate: ""
    template: ""
    where: "server"
    waitOn: ->
      [
        Meteor.subscribe 'smsinfo'
        Meteor.subscribe 'userData'
      ]
    data: ->
      link: this.params.smsinfo
    action: ()->
#      req = this.request
      res = this.response
      res.end(pre_process_sms(this.params.smsinfo));
      console.log("ACTION Ended")
