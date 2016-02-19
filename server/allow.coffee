ProfilePictures.allow
  insert: (userId, doc) ->
    true
  update: (userId, title, route, doc, fieldNames, modifier) ->
    true
  download: (userId)->
    true
  remove: (userId, doc)->
      userId == doc.owner

#Processos.allow
#	insert: (userId, nome, status, timestamp, estado) ->
#    isAdmin(userId)
#	update: (userId, nome, status, timestamp, estado)->
#    isAdmin(userId)
#	remove: (userId)->
#    isAdmin(userId)
#
#Instalacoes.allow
#	insert: (ano, instalacoes, timestamp) ->
#    isAdmin(userId)
#	update: (userId, ano, instalacoes, timestamp) ->
#    isAdmin(userId)
#	remove: (userId, doc) ->
#    isAdmin(userId)

Posts.allow
  insert: (userId, doc) ->
    userId == doc.owner
  update: (userId, doc, fields, modifier) ->
    userId == doc.owner
  remove: (userId, doc) ->
    userId == doc.owner

Attachments.allow
  insert: (userId, doc) ->
    true
  update: (userId, doc, fieldNames, modifier) ->
    true
  download: (userId)->
    true
  remove: (userId, doc)->
    userId == doc.owner

Meteor.users.allow
  update: (userId, doc, fieldNames, modifier) ->
    if userId == doc._id and not doc.username and fieldNames.length == 1 and fieldNames[0] == 'username'
      true
    else
      false

#Notifications.allow
#  insert: (userId, doc) ->
#    userId == doc.owner
#  update: (userId, doc, fields, modifier) ->
#    true
#  remove: (userId, doc) ->
#    true
#    userId == doc.owner || userId == doc.to || isAdmin(userId)

#LogMessages.allow
#	insert: (userId, doc) ->
#    isAdmin(userId)
#	update: (userId, doc) ->
#    isAdmin(userId)
#	remove: (userId, doc) ->
#    isAdmin(userId)

items.allow
  insert: (userId, doc) ->
    isUser(userId) && doc.owner
  update: (userId, doc, fieldNames, modifier) ->
    isUser(userId) && doc.owner == userId
  remove: (userId, doc)->
    isUser(userId) && doc.owner == userId

#tarefas.allow
#	insert: (userId, doc) ->
#		true
#	update: (userId, doc, fieldNames, modifier) ->
#		true
#  remove: (userId)->
#		true

#subtarefas.allow
#	insert: (userId, doc) ->
#		true
#	update: (userId, doc, fieldNames, modifier) ->
#		true
#  remove: (userId)->
#		true

Notifications.allow
  insert: (userId, doc) ->
    doc.owner == userId
  update: (userId, doc, fieldNames, modifier) ->
    true
#    doc.owner == userId && fieldNames.length == 1 && fieldNames[0] == 'read'
  remove: (userId, doc) ->
    true
#    doc.owner == userId
