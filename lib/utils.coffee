@Utils =
  getEmail: (_id)->
    if (_id)
      user = Meteor.users.findOne _id
    if user
      if typeof user.emails != 'undefined' and user.emails[0].address
        user.emails[0].address
  getName: (_id)->
    if (_id)
      user = Meteor.users.findOne _id
    if user
      if typeof user.profile != 'undefined' and user.profile.firstName and user.profile.lastName
        user.profile.firstName + " " + user.profile.lastName
      else if typeof user.profile != 'undefined' and user.profile.firstName
        user.profile.firstName
      else
        'Utilizador'
  getRanking: (nome)->
    console.log("Requesting ranking for %s", nome)
    1
  prettyDate: (date)->
    if date
      if Config.dateFormat
        moment(date).format(Config.dateFormat)
      else
        moment(date).format('D/M/YYYY')
  MyprettyDate: (date)->
    if date
      moment(date).format('D/M/YYYY HH:MM')

  timeSince: (date)->
    if date
      seconds = Math.floor((new Date() - date) / 1000)
      interval = Math.floor(seconds / 31536000)
      return interval + "years ago"  if interval > 1
      interval = Math.floor(seconds / 2592000)
      return interval + " months ago"  if interval > 1
      interval = Math.floor(seconds / 86400)
      return interval + " days ago"  if interval > 1
      interval = Math.floor(seconds / 3600)
      return interval + " hours ago"  if interval > 1
      interval = Math.floor(seconds / 60)
      return interval + " minutes"  if interval > 1
      "just now"

  isMobile: ->
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test navigator.userAgent

  loginRequired: ->
    Router.go '/sign-in'