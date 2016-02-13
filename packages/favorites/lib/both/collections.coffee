@Favorites = new Meteor.Collection 'favorites'

FavoritesSchemas = new SimpleSchema
  doc:
    type: String
    regEx: SimpleSchema.RegEx.Id

  owner:
    type: String
    autoValue: ->
      if @isInsert
        Meteor.userId()

  createdAt:
    type: Date
    autoValue: ->
      if this.isInsert
        new Date()

  title:
    type: String
    optional: true

  route:
    type: String
    optional: true
#      autoValue: ->
#        if this.isInsert
#          "/report"

Favorites.attachSchema(FavoritesSchemas)