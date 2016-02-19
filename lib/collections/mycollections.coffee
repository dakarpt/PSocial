Meteor.subscribe('userPresence');

@Notifications = new Meteor.Collection 'Notifications'

#Notifications.new = (doc) ->
#  if typeof doc.owner == 'undefined'
#    doc.owner = Meteor.userId()
#
#  Notifications.insert(doc)

Notifications.readAll = ->
  Meteor.call 'readAllNotifications'

Notifications.read = (_id) ->
  Notifications.update _id, {$set: {read: true}}

Schemas.NotificationsSchema = new SimpleSchema
  owner:
    type: String
    regEx: SimpleSchema.RegEx.Id
    optional: false
    autoValue: ->
      if this.isInsert
        Meteor.userId()
    autoform:
      type: 'hidden'

  from_email:
    type: String
    optional: false
    regEx: SimpleSchema.RegEx.Email
    autoValue: ->
      if this.isInsert || this.isUpdate
        Meteor.users.findOne(Meteor.userId()).emails[0].address

  title:
    type: String
    label: ->
      TAPi18n.__("n_Title")

  message:
    type: String
    optional: false
    min: 20,
    max: 1000,
    autoform: {
      rows: 5
    }

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
          value: user._id

Notifications.attachSchema(Schemas.NotificationsSchema)
