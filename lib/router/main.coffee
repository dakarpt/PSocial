Router.map ->
  @route "home",
    path: "/"
#    fastRender: true
  @route "createItem",
    path: "/createItem"
    waitOn: ->
      [
        Meteor.subscribe 'items'
        Meteor.subscribe 'attachments'
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
#    fastRender: true
  @route "listItem",
    path: "/listItem/:_id"
    waitOn: ->
      [
        Meteor.subscribe 'items'
        Meteor.subscribe 'attachments'
        Meteor.subscribe 'userData'
        Meteor.subscribe 'ProfilePictures'
        Meteor.subscribe 'favorites'
        Meteor.subscribe 'Notifications'
      ]
    data: ->
      itemList: items.find({_id: this.params._id}).fetch();
#    fastRender: true
  @route "editItem2",
    path: "/editItem2/:_id"
    waitOn: ->
      [
        Meteor.subscribe 'items'
        Meteor.subscribe 'attachments'
        Meteor.subscribe 'userData'
        Meteor.subscribe 'Notifications'
        Meteor.subscribe 'ProfilePictures'
        Meteor.subscribe 'favorites'
      ]
    data: ->
      items.findOne({_id: this.params._id});
#    fastRender: true
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
#    fastRender: true
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
  @route "showProfile",
    path: "/showProfile/:_id"
    waitOn: ->
      [
        ({ myid: this.params._id}) ->
          Meteor.subscribe 'userProfile', this.myid
        Meteor.subscribe 'ProfilePictures'
      ]
    data: ->
      Meteor.users.findOne({_id: this.params._id});