Meteor.publish 'notifications', ->
  Notifications.find()
