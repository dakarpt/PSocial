@Posts = new Meteor.Collection('posts');

Schemas.Posts = new SimpleSchema
  title:
    type: String
    max: 60

  content:
    type: String
    autoform:
      rows: 5

  createdAt:
    type: Date
    autoValue: ->
      if this.isInsert
        new Date()

  updatedAt:
    type: Date
    optional: true
    autoValue: ->
      if this.isUpdate
        new Date()

  picture:
    type: String
    autoform:
      afFieldInput:
        type: 'fileUpload'
        collection: 'Attachments'
        onAfterInsert: ->
          (err, fileObj) ->
            if err
              alert 'Error'
#						else
#							alert 'Upload successful'

  owner:
    type: String
    regEx: SimpleSchema.RegEx.Id
    autoValue: ->
      if this.isInsert
        Meteor.userId()
    autoform:
      options: ->
        _.map Meteor.users.find().fetch(), (user)->
          label: user.emails[0].address
          value: user._id
  route:
    type: String
      autoValue: ->
        if this.isUpdate
          alert 'Update successful'

Posts.attachSchema(Schemas.Posts)

Posts.helpers
  author: ->
    user = Meteor.users.findOne(@owner)
    if user?.profile?.firstName? and user?.profile?.lastName
      user.profile.firstName + ' ' + user.profile.lastName
    else
      user?.emails?[0].address
