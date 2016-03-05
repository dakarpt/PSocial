Meteor.methods
  readAllNotifications: ->
    Notifications.update {read: false}, {$set: {read: true, icon: "circle-o"}}, {multi: true}
