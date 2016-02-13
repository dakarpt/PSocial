@Notifications = new Meteor.Collection 'notifications'

Notifications.new = (doc) ->
  if typeof doc.owner == 'undefined'
    doc.owner = Meteor.userId()

  Notifications.insert(doc)

Notifications.readAll = ->
  Meteor.call 'readAllNotifications'

Notifications.read = (_id) ->
  Notifications.update _id, {$set: {read: true}}

NotificationsSchema = new SimpleSchema
  owner:
    type: String
    regEx: SimpleSchema.RegEx.Id
    autoValue: ->
      if this.isInsert
        Meteor.userId()

  title:
    type: String
    label: ->
      TAPi18n.__("n_Title")

  message:
    type: String
    optional: true

  link:
    type: String
    optional: true
    label: ->
      TAPi18n.__("n_Link")

  read:
    type: Boolean
    autoValue: ->
      if this.isInsert
        false

  date:
    type: Date
    autoValue: ->
      if this.isInsert
        new Date()

  icon:
    type: String
    defaultValue: 'circle-o'
    label: ->
      TAPi18n.__("n_Icon")
    allowedValues: [
      "circle-o"
      "thumbs-up"
      "bolt"
    ]

  class:
    type: String
    autoValue: ->
      if this.isInsert
        'default'

  to:
    type: String
    label: ->
      TAPi18n.__("n_To")
    defaultValue: "all"
    autoform:
      options: ->
        _.map Meteor.users.find().fetch(), (user)->
          label: user.emails[0].address
          value: user.emails[0].address

Notifications.attachSchema(NotificationsSchema)
