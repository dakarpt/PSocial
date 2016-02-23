Template.registerHelper 'Notifications', (options) ->
  if typeof window['Notifications'] != 'undefined'
    if options instanceof Spacebars.kw and options.hash
      limit = options.hash.limit if options.hash.limit?
      order = {read: 1, date: -1} if options.hash.unreadFirst?
    else
      limit = 0
      order = {date: -1}

    Notifications.find({to: Meteor.user()._id, read: false}, {limit: limit, sort: order}).fetch()

Template.registerHelper 'notificationCount', ->
  if typeof window['Notifications'] != 'undefined'
    Notifications.find({to: Meteor.user()._id, read: false}).count()

Template.registerHelper 'hasNotifications', ->
  Notifications.find({to: Meteor.user()._id, read: false}).count() > 0

Template.registerHelper 'tarefasCount', (itemID) ->
  console.log "Tarefas count com id:", itemID
#  if typeof window['items'] != 'undefined'
  item = items.findOne(itemID)
  console.log "# de tarefas ", item.subtarefas.length
  item.subtarefas.length

Template.registerHelper 'hasTarefas', ->
  if typeof window['items'] != 'undefined'
    item = items.findOne(itemID)
    item.subtarefas.length > 0

Template.registerHelper 'isTR', (i)->
  breakon = 4;
  if (i>0)
    index = i + 1
    res= (index/breakon)
    console.log "isTR:", index, (index/breakon),  res == Math.round(index/breakon);
    res == Math.round(index/breakon)
#  else
#    console.log "isTR:", i, true
#    true

Template.registerHelper 'TR_ON', ->