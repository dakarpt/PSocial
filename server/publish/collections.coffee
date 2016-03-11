# You'll want to replace these functions. They publish the whole
# collection which is problematic after your app grows

Meteor.publish 'posts', ->
  Posts.find()

Meteor.publish 'favorites', ->
  Favorites.find()

Meteor.publish 'attachments', ->
  Attachments.find()

#Meteor.publish 'Processos', ->
#  Processos.find()

Meteor.publish 'ProfilePictures', ->
  ProfilePictures.find()

#Meteor.publish 'Instalacoes', ->
#  Instalacoes.find()

#Meteor.publish 'LogMessages', ->
#  LogMessages.find({}, {limit: 20, sort: { timestamp: -1}})

Meteor.publish 'userData', ->
  Meteor.users.find {}, fields:
    '_id': true
    'emails': true
    'username': true
    'profile': true
    'services': true
    'status': true
    'statusDefault': true
    'statusConnection': true

Meteor.publish 'users', ->
  Meteor.users.find {}, fields:
    '_id': true
    'emails': true
    'username': true
    'profile': true
    'services': true
    'status': true
    'statusDefault': true
    'statusConnection': true

Meteor.publish 'items', ->
  items.find()

Meteor.publish 'userPresence', ->
  Presences.find({userId: {$exists: true}}, {fields: {state: true, userId: true}});

Meteor.publish 'smsinfo', ->
  smsinfo.find()


