Template.registerHelper 'niceName', (_id)->
  if _id
    user = Meteor.users.findOne _id

  if user
    if user.username
      user.username
    else if typeof user.profile != 'undefined' and user.profile.firstName and user.profile.lastName
      user.profile.firstName + " " + user.profile.lastName
    else if typeof user.profile != 'undefined' and user.profile.firstName
      user.profile.firstName
    else if user.emails[0].address
      user.emails[0].address
    else
      'A user'

Template.registerHelper 'profileThumbSrc', (_id) ->
#  console.log("requesting profile pic: id: %s", _id)
  if (typeof _id isnt 'string')
#    console.log("Returning /empty.png")
    return
  if _id.indexOf('/') > -1
#    console.log("Returning _id: %s", _id)
    return _id
  if typeof Meteor.users != 'undefined'
    if Meteor.users.findOne _id
      user = Meteor.users.findOne({_id: _id})
      if typeof user.profile != 'undefined' and typeof user.profile.picture != 'undefined'
        picture = user.profile.picture

        if picture.indexOf('/') > -1
#          console.log("Returning picture: ", picture)
          picture
        else
          if typeof ProfilePictures != 'undefined' && ProfilePictures.findOne user.profile.picture
            picture = ProfilePictures.findOne picture
#            console.log("Returning picture: url", picture.url({store: 'thumbs'}))
            picture.url({store: 'thumbs'})

