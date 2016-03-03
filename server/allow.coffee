ProfilePictures.allow
  insert: (userId, doc) ->
    true
  update: (userId, title, route, doc, fieldNames, modifier) ->
    true
  download: (userId)->
    true
  remove: (userId, doc)->
      userId == doc.owner

#Posts.allow
#  insert: (userId, doc) ->
#    userId == doc.owner
#  update: (userId, doc, fields, modifier) ->
#    userId == doc.owner
#  remove: (userId, doc) ->
#    userId == doc.owner

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

items.allow
  insert: (userId, doc) ->
    isUser(userId) && doc.owner
  update: (userId, doc, fieldNames, modifier) ->
    isUser(userId) && doc.owner == userId
  remove: (userId, doc)->
    isUser(userId) && doc.owner == userId

smsinfo.allow
	insert: (userId, doc) ->
		true
	update: (userId, doc, fieldNames, modifier) ->
		true
  remove: (userId)->
		true

Notifications.allow
  insert: (userId, doc) ->
    doc.owner == userId
  update: (userId, doc, fieldNames, modifier) ->
    true
#    doc.owner == userId && fieldNames.length == 1 && fieldNames[0] == 'read'
  remove: (userId, doc) ->
    true
#    doc.owner == userId
