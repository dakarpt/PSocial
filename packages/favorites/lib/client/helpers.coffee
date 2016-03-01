Template.registerHelper 'favoritesByDoc', (_id)->
  Favorites.find doc: _id

Template.registerHelper 'myFavorites', ->
  Favorites.find owner: Meteor.userId()

Template.registerHelper 'getRanking', (_id)->
  console.log("helper ranking: id: %s", _id)
#  item = items.findOne(_id)
  owner = Meteor.users.findOne(_id)
  if (owner.profile) && (owner.profile.ranking)
    owner.profile.ranking
  else
    0