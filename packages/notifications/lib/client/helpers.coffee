Template.registerHelper 'Notifications', (options) ->
  if typeof window['Notifications'] != 'undefined'
    if options instanceof Spacebars.kw and options.hash
      limit = options.hash.limit if options.hash.limit?
      order = {read: 1, date: -1} if options.hash.unreadFirst?
    else
      limit = 0
      order = {date: -1}

    Notifications.find({to: Meteor.user().emails[0].address, read: false}, {limit: limit, sort: order}).fetch()

Template.registerHelper 'notificationCount', ->
  if typeof window['Notifications'] != 'undefined'
    Notifications.find({to: Meteor.user().emails[0].address, read: false}).count()

Template.registerHelper 'hasNotifications', ->
  Notifications.find({to: Meteor.user().emails[0].address, read: false}).count() > 0