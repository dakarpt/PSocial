Template.favoriteButton.helpers
  isFavorite: (_id) ->
    Favorites.findOne
      doc: _id
      owner: Meteor.userId()

Template.favoriteButtonFavorited.helpers
  docTitle: (_id) ->
    items.findOne(_id)?.nome

Template.favoriteButtonNotFavorited.helpers
  docTitle: (_id) ->
    items.findOne(_id)?.nome
  docRoute: (_id) ->
#    Posts.findOne(_id)?.route

Template.favoriteButtonNotFavorited.events
  'click .js-favorite-button': (e, t) ->
    Favorites.insert
      doc: $(e.currentTarget).attr('doc')
      owner: Meteor.userId()
#      title: $(e.currentTarget).attr('title')
#      route: $(e.currentTarget).attr('route')

Template.favoriteButtonFavorited.events
  'click .js-favorite-button': (e, t) ->
    favorite = Favorites.findOne
      owner: Meteor.userId()
      doc: $(e.currentTarget).attr('doc')
    Favorites.remove
      _id: favorite._id